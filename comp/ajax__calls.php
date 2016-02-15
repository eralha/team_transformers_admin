<?php

// No direct access to this file
defined('ABSPATH') or die('Restricted access');


	class ajax__component extends eralha_crowdfunding_account {

		var $ajaxHoocks = array(
		        "userLogin" => "nopriv",
		        "userRegister" => "nopriv",
		        "userLogout" => "priv",
		        "getColaborators" => "priv",
		        "getSubscribers" => "priv",
		        "getColaboradorSubscribers" => "priv",
		        "getUser" => "priv",
		        "setUserMeta" => "priv",
		        "getUserMessages" => "priv",
		        "getUserToReadMessages" => "priv",
		        "getUserInbox" => "priv",
		        "getUserOutbox" => "priv",
		        "sendMessageToUser" => "priv",
		        "sendMessageToAdmin" => "priv",
		        "updateUserData" => "priv",
		        "updateMessageState" => "priv"
		    );

		function ajax__component(){
			
		}

		function getColaborators(){
			$this->verifyNonce('getColaborators');

			global $wpdb;
			global $current_user;

			$users = get_users(array(
				'order' => 'DESC',
				'orderby' => 'id'
			));

			$postObj = array();

			foreach ($users as $user) {
			  $user_id = $user->data->ID;

			  if(!isset($user->caps["subscriber"])){
			  	array_push($postObj, $user->data);
			  }

			}

			echo json_encode($postObj);

			wp_die();
		}

		function checkMessagesFromUser($user_id, $current_userID){
			global $wpdb;

			$query = "SELECT COUNT(*) FROM $this->table_menssages";
			$query .= " WHERE iUserIdDestinatario = %d";
			$query .= " AND iUserId = %d";
			$query .= " AND iLida = 0";

			$query = $wpdb->prepare($query, $current_userID, $user_id);

			$msgs_to_read = $wpdb->get_var($query);

			return $msgs_to_read;
		}

		function getUserToReadMessages(){
			$this->verifyNonce('getUserToReadMessages');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			

			$query = "SELECT COUNT(*) FROM $this->table_menssages";
			$query .= " WHERE iUserIdDestinatario = $current_userID";
			$query .= " AND iLida = 0";
			$msgs_to_read = $wpdb->get_var($query);

			$postObj = (object)[];
			$postObj->msgs_to_read = $msgs_to_read;

			echo json_encode($postObj);

			wp_die();
		}

		function getColaboradorSubscribers(){
			$this->verifyNonce('getColaboradorSubscribers');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$users = get_users(array(
				'order' => 'DESC',
				'orderby' => 'id',
				'role'  => 'subscriber'
			));

			$postObj = array();

			foreach ($users as $user) {
			  $user_id = $user->data->ID;
			  $user->data->treinador = get_user_meta($user_id, 'treinador');
			  $user->data->msgs_to_read = $this->checkMessagesFromUser($user_id, $current_userID);

			  if($current_user->data->ID == $user->data->treinador[0]){
			  	array_push($postObj, $user->data);
			  }

			}

			echo json_encode($postObj);

			wp_die();
		}

		function getSubscribers(){
			$this->verifyNonce('getSubscribers');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$users = get_users(array(
				'order' => 'DESC',
				'orderby' => 'id',
				'role'  => 'subscriber'
			));

			$postObj = array();

			foreach ($users as $user) {
			  $user_id = $user->data->ID;
			  $user->data->treinador = get_user_meta($user_id, 'treinador');
			  $user->data->msgs_to_read = $this->checkMessagesFromUser($user_id, $current_userID);

			  array_push($postObj, $user->data);

			}

			echo json_encode($postObj);

			wp_die();
		}

		function getUser(){
			$this->verifyNonce('getUser');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			
			$user_id = $_POST["user_id"];
			$user = get_user_by('id', $user_id);
			$user->data->meta = get_user_meta($user_id);

			
			$msgs_to_read = $this->checkMessagesFromUser($user_id, $current_userID);

			$postObj = $user->data;
			$postObj->msgs_to_read = $msgs_to_read;

			echo json_encode($postObj);

			wp_die();
		}

		function getMsgMessages(){
			global $wpdb;
			global $current_user;
			
			$msg_id = $_POST["msg_id"];
			$query = 'SELECT * FROM '.$this->table_menssages.' WHERE iIDMenssagemResposta = %d';

			$query = $wpdb->prepare($query, $msg_id);

			$results = $wpdb->get_results($query, OBJECT);

			echo json_encode($results);

			wp_die();
		}

		function getMessages($sender_id, $receiver_id){
			global $wpdb;
			global $current_user;

			$query = "SELECT t.*, u1.display_name AS vchSenderName, u2.display_name AS vchReceiverName FROM ";
			$query .= "(SELECT * FROM $this->table_menssages WHERE `iUserId` = %d AND `iUserIdDestinatario` = %d) AS t ";
			$query .= "INNER JOIN wp_users AS u1 ON u1.ID = t.iUserId ";
			$query .= "INNER JOIN wp_users AS u2 ON u2.ID = t.iUserIdDestinatario ";
			$query .= "ORDER BY t.iData DESC";

			$query = $wpdb->prepare($query, $sender_id, $receiver_id);

			return $results = $wpdb->get_results($query, OBJECT);
		}

		function getUserInbox(){
			$this->verifyNonce('getUserInbox');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$sender_id = (isset($_POST["sender_id"])) ? $_POST["sender_id"] : 0;
			$receiver_id = $current_userID;

			$results = $this->getMessages($sender_id, $receiver_id);

			echo json_encode($results);

			wp_die();
		}

		function getUserOutbox(){
			$this->verifyNonce('getUserOutbox');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$sender_id = $current_userID;
			$receiver_id = (isset($_POST["receiver_id"])) ? $_POST["receiver_id"] : 0;

			$results = $this->getMessages($sender_id, $receiver_id);

			echo json_encode($results);

			wp_die();
		}

		function getUserMessages(){
			$this->verifyNonce('getUserMessages');

			global $wpdb;
			global $current_user;
			
			$user_id = $current_user->data->ID;
			$inbox = (isset($_POST["inbox"])) ? $_POST["inbox"] : 0;

			$query = 'SELECT msg.*, u.display_name AS vchSenderName FROM '.$this->table_menssages.' AS msg';
			$query .= ' INNER JOIN wp_users AS u ON u.ID = msg.iUserId';
			$query .= ($inbox == true)? ' WHERE msg.iUserId = '.$user_id : ' WHERE msg.iUserIdDestinatario = '.$user_id;
			$query .= ' ORDER BY msg.iData DESC';

			$results = $wpdb->get_results($query, OBJECT);

			echo json_encode($results);

			wp_die();
		}

		function sendMessageToUser(){
			$this->verifyNonce('sendMessageToUser');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$user_id = $_POST["user_id"];
			$user = get_user_by('id', $user_id);
			$user_meta = get_user_meta($user_id);

			$message = json_decode(stripslashes($_POST["message"]));

			$treinador = $user_meta["treinador"][0];

			//se nao for admin e nao for treinador deste user nao adiciona menssagem
			if(
				($current_user->caps["administrator"] != 1 && $treinador != $current_userID)
				|| 
				($message->vchAssunto == "" || $message->vchMensagem == "")
			 ) {
				echo "0";
				wp_die();
			}

			$results = $this->saveMsg($user_id, $current_userID, $message);

			echo json_encode($results);

			wp_die();
		}

		function sendMessageToAdmin(){
			$this->verifyNonce('sendMessageToAdmin');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$user_id = $current_userID;
			$user = get_user_by('id', $user_id);
			$user_meta = get_user_meta($user_id);

			$message = json_decode(stripslashes($_POST["message"]));

			$treinador = $user_meta["treinador"][0];
			$treinador = get_user_by('id', $treinador);

			if(empty($treinador)
				|| $message->vchAssunto == ""
				|| $message->vchMensagem == ""){ 
				echo "0";
				wp_die();
			}

			$results = $this->saveMsg($treinador->data->ID, $current_userID, $message);

			echo json_encode($results);

			wp_die();
		}

		function saveMsg($iUserIdDestinatario, $iUserId, $message){
			global $wpdb;

			$message->iUserIdDestinatario = $iUserIdDestinatario;
			$message->iUserId = $iUserId;
			$message->iData = time();
			$message->iIDMenssagemResposta = ($message->iIDMenssagemResposta)? $message->iIDMenssagemResposta : 0;
			$message->iLida = 0;
			$message->iDataLida = 0;

			$results = $wpdb->insert($this->table_menssages, get_object_vars($message));

			return $results;
		}

		function setUserMeta(){
			$this->verifyNonce('setUserMeta');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			
			$user_meta = json_decode(stripslashes($_POST["meta"]));
			$user_id = $_POST["user_id"];

			if($current_user->caps["administrator"] != 1) {
				echo "0";

				wp_die();
			}

			$postObj = $user_meta;
			$this->updateMetaData($user_id, $user_meta);

			echo json_encode($postObj);

			wp_die();
		}

		function updateMessageState(){
			$this->verifyNonce('updateMessageState');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			
			$msgs = json_decode(stripslashes($_POST["msgs"]));
			$msgs = implode(",", $msgs );
			$msgs = addslashes($msgs);


			$query = "UPDATE $this->table_menssages ";
			$query .= "SET iLida = 1, ";
			$query .= "iDataLida = ".time()." ";
			$query .= "WHERE iIDMenssagem IN (".$msgs.") ";
			$query .= "AND iUserIdDestinatario = %d";

			$query = $wpdb->prepare($query, $current_userID);

			$results = $wpdb->query($query);

			echo json_encode($results);

			wp_die();
		}

		function updateUserData(){
			$this->verifyNonce('updateUserData');

			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$user_data = json_decode(stripslashes($_POST["user"]));
			$new_password = json_decode(stripslashes($_POST["new_password"]));
			
			$user_meta = $user_data->meta;
			$user_id =  $user_data->ID;

			if($current_userID != $user_id) {
				echo "0";
				wp_die();
			}

			$stored_user_data = get_user_by('id', $current_userID);
			$stored_user_data = $stored_user_data->data;

			//check to see if we have changes to stored data if so update it
			$update_batch = array( 'ID' => $user_id );
			if($stored_user_data->user_email != $user_data->user_email){
				$update_batch["user_email"] = $user_data->user_email;
			}
			if($stored_user_data->email != $user_data->display_name){
				$update_batch["display_name"] = $user_data->display_name;
			}
			if($new_password){
				$update_batch["user_pass"] = $new_password;
			}
			wp_update_user($update_batch);



			$this->updateMetaData($user_id, $user_meta);

			echo json_encode(get_user_by('id', $current_userID));

			wp_die();
		}

		function updateMetaData($user_id, $user_meta){
			update_user_meta( $user_id, 'treinador', $user_meta->treinador[0]);
		}

		function userLogin(){
			$this->verifyNonce('userLogin');

			$data = $_POST["data"];

			if(!isset($data["user_login"]) || !isset($data["user_password"]) || is_user_logged_in()){
				echo "0";
				wp_die();
			}

			$data['remember'] = true;

			$user_signon = wp_signon($data, false);

			if (is_wp_error($user_signon)){
		        echo "0";
		    }else{
		        echo json_encode( array('loggedin'=>true, 'ID' => $user_signon->ID) );
		    }

			wp_die();
		}

		function userLogout(){
			$this->verifyNonce('userLogout');

			wp_logout();

			echo "true";

			wp_die();
		}

		function userRegister(){
			$this->verifyNonce('userRegister');

			$data = $_POST["data"];

			$userID = wp_insert_user(array (
				'first_name' => $data["first_name"],
				'last_name' => $data["last_name"],
				'nickname' => $data["nickname"],
				'user_email' => $data["user_email"],
				'user_login' => $data["user_login"],
				'user_pass' => $data["user_pass"]
			));

			/*
				Add a custom capability to the user
					$user = new WP_User($userID);
					$user->add_cap("edit_posts");
					$user->add_cap("delete_posts");
			*/

			if(isset($userID->errors)){
				echo json_encode($userID);
			}else{
				//Add USER INFO
				add_user_meta($userID, "adress", $data["adress"], true);
				add_user_meta($userID, "localidade", $data["localidade"], true);
				add_user_meta($userID, "codPostal", $data["codPostal"], true);
				add_user_meta($userID, "treinador", "Não atribuido", true);

				//Notify user and admin that a new user arrived
				wp_new_user_notification($userID, '', 'both');

				echo '{"userID": "'.$userID.'"}';
			}

			wp_die();
		}

	}


?>