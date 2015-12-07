<?php
	/*
		Plugin Name: Gestão de clientes
		Plugin URI: 
		Description: Permite a gestão de clientes e de treinadores
		Version: 0.0.1
		Author: Emanuel Ralha
		Author URI: 
	*/

// No direct access to this file
defined('ABSPATH') or die('Restricted access');

if (!class_exists("eralha_crowdfunding_account")){
	class eralha_crowdfunding_account{

		var $optionsName = "eralha_crowdfunding_account";
		var $dbVersion = "0.2";
		var $path = "/account/"; //path to account pages

		function eralha_crowdfunding_account(){
			
		}

		function init(){
			global $wpdb;
			$tabea_ficheiros = $wpdb->prefix.$this->optionsName."_ficheiros";
			$table_menssages = $wpdb->prefix.$this->optionsName."_menssagens";

			$this->tabea_ficheiros = $tabea_ficheiros;
			$this->table_menssages = $table_menssages;


			//wp_enqueue_script( 'theme-plugins', get_template_directory_uri() . '/js/plugins.js');
			wp_register_script( 'angular', plugins_url( 'js/angular.js', __FILE__ ));
			wp_register_script( 'team-angular-funcs', plugins_url( 'js/main.js', __FILE__ ), array('angular'));

			wp_register_style( 'bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css' );
			wp_register_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' );

    		wp_enqueue_style( 'bootstrap' );
    		wp_enqueue_style( 'font-awesome' );

    		
    		/*
    		wp_enqueue_script( 'team-angular-funcs' );
    		wp_enqueue_script( 'angular' );
    		*/
		}
		function activationHandler(){
			global $wpdb;
			$tabea_ficheiros = $wpdb->prefix.$this->optionsName."_ficheiros";
			$table_menssages = $wpdb->prefix.$this->optionsName."_menssagens";

			$sqlTblFicheiros = "CREATE TABLE ".$tabea_ficheiros." 
			(
				`iIdFicheiro` int(8) NOT NULL auto_increment, 
				`iData` int(32) NOT NULL, 
				`iUserId` int(32) NOT NULL, 
				`iPostId` int(32) NOT NULL, 
				`vchTipo` varchar(255) NOT NULL, 
				`vchPathFicheiro` varchar(255) NOT NULL,
				`vchNomeFicheiro` varchar(255) NOT NULL,
				PRIMARY KEY  (`iIdFicheiro`)
			);";

			$sqlTblMessagens = "CREATE TABLE ".$table_menssages." 
			(
				`iIDMenssagem` int(8) NOT NULL auto_increment, 
				`iUserId` int(8) NOT NULL, 
				`iUserIdDestinatario` int(8) NOT NULL, 
				`iIDMenssagemResposta` int(32) NOT NULL, 
				`iData` int(32) NOT NULL, 
				`iLida` int(1) NOT NULL, 
				`iDataLida` int(32) NOT NULL,
				`vchAssunto` varchar(200) NOT NULL, 
				`vchMensagem` varchar(3000) NOT NULL, 
				PRIMARY KEY  (`iIDMenssagem`)
			);";

			require_once(ABSPATH . 'wp-admin/upgrade-functions.php');
			dbDelta($sqlTblFicheiros);
			dbDelta($sqlTblMessagens);

			add_option($this->optionsName."_db_version", $this->dbVersion);
		}
		function deactivationHandler(){
			global $wpdb;

			$tabea_ficheiros = $wpdb->prefix.$this->optionsName."_ficheiros";

			//$wpdb->query("DROP TABLE IF EXISTS ". $tabea_ficheiros);
		}

		function reArrayFiles($file_post) {
		    $file_ary = array();
		    $file_count = count($file_post['name']);
		    $file_keys = array_keys($file_post);

		    for ($i=0; $i<$file_count; $i++) {
		        foreach ($file_keys as $key) {
		            $file_ary[$i][$key] = $file_post[$key][$i];
		        }
		    }
		    return $file_ary;
		}

		function getAllColaborators(){
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
			$query .= " WHERE iUserIdDestinatario = $current_userID";
			$query .= " AND iUserId = $user_id";
			$query .= " AND iLida = 0";
			$msgs_to_read = $wpdb->get_var($query);

			return $msgs_to_read;
		}

		function getUserToReadMessages(){
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

		function getAllSubscribers(){
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

		function getUserInfo(){
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
			$query = 'SELECT * FROM '.$this->table_menssages.' WHERE iIDMenssagemResposta = '.$msg_id;

			$results = $wpdb->get_results($query, OBJECT);

			echo json_encode($results);

			wp_die();
		}

		function getMessages($sender_id, $receiver_id){
			global $wpdb;
			global $current_user;

			$query = "SELECT t.*, u1.display_name AS vchSenderName, u2.display_name AS vchReceiverName FROM ";
			$query .= "(SELECT * FROM $this->table_menssages WHERE `iUserId` = $sender_id AND `iUserIdDestinatario` = $receiver_id) AS t ";
			$query .= "INNER JOIN wp_users AS u1 ON u1.ID = t.iUserId ";
			$query .= "INNER JOIN wp_users AS u2 ON u2.ID = t.iUserIdDestinatario ";
			$query .= "ORDER BY t.iData DESC";

			return $results = $wpdb->get_results($query, OBJECT);
		}

		function getUserInbox(){
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
			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;

			$user_id = $_POST["user_id"];
			$user = get_user_by('id', $user_id);
			$user_meta = get_user_meta($user_id);

			$message = json_decode(stripslashes($_POST["message"]));

			$treinador = $user_meta["treinador"][0];

			//se nao for admin e nao for treinador deste user nao adiciona menssagem
			if(($current_user->caps["administrator"] != 1 && $treinador != $current_userID)
				|| $message->vchAssunto == ""
				|| $message->vchMensagem == "") {
				echo "0";
				wp_die();
			}

			$message->iUserIdDestinatario = $user_id;
			$message->iUserId = $current_userID;
			$message->iData = time();
			$message->iIDMenssagemResposta = ($message->iIDMenssagemResposta)? $message->iIDMenssagemResposta : 0;
			$message->iLida = 0;
			$message->iDataLida = 0;

			$results = $wpdb->insert($this->table_menssages, get_object_vars($message));

			echo json_encode($results);

			wp_die();
		}

		function sendMessageToAdmin(){
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

			$message->iUserIdDestinatario = $treinador->data->ID;
			$message->iUserId = $current_userID;
			$message->iData = time();
			$message->iIDMenssagemResposta = ($message->iIDMenssagemResposta)? $message->iIDMenssagemResposta : 0;
			$message->iLida = 0;
			$message->iDataLida = 0;

			$results = $wpdb->insert($this->table_menssages, get_object_vars($message));

			echo json_encode($results);

			wp_die();
		}

		function setUserMeta(){
			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			
			$user_meta = json_decode(stripslashes($_POST["meta"]));
			$user_id = $_POST["user_id"];

			/*
			if($current_user->caps["administrator"] != 1) {
				echo "0";

				wp_die();
			}
			*/

			$postObj = $user_meta;

			$this->updateMetaData($user_id, $user_meta);

			echo json_encode($postObj);

			wp_die();
		}

		function updateMessageState(){
			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			
			$msgs = json_decode(stripslashes($_POST["msgs"]));

			$query = "UPDATE $this->table_menssages ";
			$query .= "SET iLida = 1, ";
			$query .= "iDataLida = ".time()." ";
			$query .= "WHERE iIDMenssagem IN (".implode(",", $msgs ).") ";
			$query .= "AND iUserIdDestinatario = ".$current_userID;

			//$results = $wpdb->insert($this->table_menssages, get_object_vars($message));

			echo json_encode($query);

			wp_die();
		}

		function updateUserData(){
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

		function printAdminPage(){
			global $wpdb;
			global $current_user;

			$pluginDir = str_replace("", "", plugin_dir_url(__FILE__));
			set_include_path($pluginDir);

			$successMSG = "";
			$errorMSG = "";

			$content = "<div class='team__admin clearfix angular-init' ng-app='appModule'>";

			if(is_user_logged_in()){
				//a view por defeito é a info
				$view = (isset($_GET["view"]))? $_GET["view"] : "list";

				//Se for admin o ecran por defeito é outro
				if($current_user->caps["administrator"] == 1) {
					$view = (isset($_GET["view"]))? $_GET["view"] : "list_all";
					echo "<script>window.isAdmin = true;</script>";
				}

				//este é o menu de navegação que será sempre ncluido
				include "modules/backend/navigation.php";

				echo "<link rel='stylesheet' href='".plugins_url( '', __FILE__ )."/css/admin__style.css' type='text/css' />";
				echo "<script>window.pluginsDir = '".plugins_url( '', __FILE__ )."';</script>";
				echo "<script>window.currentUserId = '".$current_user->data->ID."';</script>";				
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/angular.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/directives/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/controllers/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/services/main.js"></script>';

				/*
				switch ($view) {
				    case "list":
				        include "modules/backend/list__users.php";
				        break;
				    case "list_all":
				        include "modules/backend/list_all__users.php";
				        break;
				    default:
				    	$responseHTML = "";
				}
				*/

			}

			$content .= "</div>";

			echo $content;
		}

		function addPostFiles($fieldName, $post_id){
			//$fileInfo = $this->reArrayFiles($_FILES[$fieldName]);
			global $wpdb;
			$pluginDir = str_replace("", "", plugin_dir_url(__FILE__));

			for($i=0; $i<count($_FILES[$fieldName]['name']); $i++) {
			  //Get the temp file path
			  $tmpFilePath = $_FILES[$fieldName]['tmp_name'][$i];

			  //Make sure we have a filepath
			  if ($tmpFilePath != ""){
			    //Setup our new file path
			    $newFilePath = $pluginDir. "/uploads/" . $_FILES[$fieldName]['name'][$i];

			    $uploadPath = str_replace("http://".$_SERVER['HTTP_HOST']."/", "", $pluginDir);
			    $uploadPath = $uploadPath."uploads/";
			    $fileName = "user_".get_current_user_id()."_".$post_id."_".$_FILES[$fieldName]['name'][$i];

				$up = move_uploaded_file($tmpFilePath, $uploadPath.$fileName);

			    //Upload the file into the temp dir
			    if($up) {
			    	$tabea_ficheiros = $wpdb->prefix.$this->optionsName."_ficheiros";
			    	$wpdb->insert($tabea_ficheiros, 
						array(
						'iData'=>time(), 
						'iUserId'=> get_current_user_id(), 
						'iPostId'=> $post_id, 
						'vchTipo'=> $fieldName, 
						'vchPathFicheiro'=> $uploadPath, 
						'vchNomeFicheiro'=> $fileName
					));
			    }
			  }
			}
		}

		function validate($form){
			$errorMSG = "";
			$errCount = 0;

			include "validators/$form.php";

			$errorMSG = ($errCount > 0)? "<b>Existem erros nos seguintes campos:</b><p>".$errorMSG."</p>" : "";

			return array($errorMSG, $errCount);
		}

		function createContext($data){
			$params = array(
		      'http' => array(
		          'method' => 'POST',
		          'content' => http_build_query($data)
			   ));
			   $context = stream_context_create($params);
			return $context;
		}

		function addContent($content=''){
			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			$pluginDir = str_replace("", "", plugin_dir_url(__FILE__));
			set_include_path($pluginDir);

			$successMSG = "";
			$errorMSG = "";

			if(strpos($content, "[er-crowd-account]") !== false){
				if(is_user_logged_in()){
					//a view por defeito é a info
					$view = (isset($_GET["view"]))? $_GET["view"] : "info";

					//este é o menu de navegação que será sempre ncluido
					include "modules/frontend/account__nav.php";

					$responseHTML .= "<link rel='stylesheet' href='".plugins_url( '', __FILE__ )."/css/admin__style.css' type='text/css' />";
					$responseHTML .= "<script>var ajaxurl = '".admin_url('admin-ajax.php')."';</script>";
					$responseHTML .= "<script>window.pluginsDir = '".plugins_url( '', __FILE__ )."';</script>";
					$responseHTML .= "<script>window.currentUserId = '".$current_user->data->ID."';</script>";
					$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/angular.js"></script>';
					$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/main__frontend.js"></script>';
					$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/directives/main.js"></script>';
					$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/controllers/main__frontend.js"></script>';
					$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/services/main.js"></script>';

				}else{
					include "modules/frontend/account__register.php";
				}
			}

			$responseHTML = str_replace("{REQUEST_URI}", $_SERVER['REQUEST_URI'], $responseHTML);
			//Success Message
			$responseHTML = str_replace("{hidde_success}", ($successMSG != "")? "" : "hidden", $responseHTML);
			$responseHTML = str_replace("{success_message}", $successMSG, $responseHTML);
			//Error message
			$responseHTML = str_replace("{hidde_error}", ($errorMSG != "")? "" : "hidden", $responseHTML);
			$responseHTML = str_replace("{error_message}", $errorMSG, $responseHTML);

			$content = str_replace("[er-crowd-account]", $responseHTML, $content);

			return $content;
		}
	}
}
if (class_exists("eralha_crowdfunding_account")) {
	$eralha_crowdfunding_account_obj = new eralha_crowdfunding_account();
	global $$_account;
	$_account = $eralha_crowdfunding_account_obj;
}

//Actions and Filters
if (isset($eralha_crowdfunding_account_obj)) {
	//VARS
		$plugindir = plugin_dir_url( __FILE__ );

	//Actions
		register_activation_hook(__FILE__, array($eralha_crowdfunding_account_obj, 'activationHandler'));
		register_deactivation_hook(__FILE__, array($eralha_crowdfunding_account_obj, 'deactivationHandler'));
		add_action('init', array($eralha_crowdfunding_account_obj, 'init'));
		//add_action('plugins_loaded', array($eralha_crowdfunding_account_obj, 'init'));

		add_action('admin_menu', 'eralha_crowdfunding_account_init');

		add_action( 'wp_ajax_getColaborators', array($eralha_crowdfunding_account_obj, 'getAllColaborators') );
		add_action( 'wp_ajax_getSubscribers', array($eralha_crowdfunding_account_obj, 'getAllSubscribers') );
		add_action( 'wp_ajax_getColaboradorSubscribers', array($eralha_crowdfunding_account_obj, 'getColaboradorSubscribers') );
		add_action( 'wp_ajax_getUser', array($eralha_crowdfunding_account_obj, 'getUserInfo') );
		add_action( 'wp_ajax_setUserMeta', array($eralha_crowdfunding_account_obj, 'setUserMeta') );
		add_action( 'wp_ajax_getUserMessages', array($eralha_crowdfunding_account_obj, 'getUserMessages') );
		add_action( 'wp_ajax_getUserToReadMessages', array($eralha_crowdfunding_account_obj, 'getUserToReadMessages') );
		add_action( 'wp_ajax_getUserInbox', array($eralha_crowdfunding_account_obj, 'getUserInbox') );
		add_action( 'wp_ajax_getUserOutbox', array($eralha_crowdfunding_account_obj, 'getUserOutbox') );
		add_action( 'wp_ajax_sendMessageToUser', array($eralha_crowdfunding_account_obj, 'sendMessageToUser') );
		add_action( 'wp_ajax_sendMessageToAdmin', array($eralha_crowdfunding_account_obj, 'sendMessageToAdmin') );
		add_action( 'wp_ajax_updateUserData', array($eralha_crowdfunding_account_obj, 'updateUserData') );
		add_action( 'wp_ajax_updateMessageState', array($eralha_crowdfunding_account_obj, 'updateMessageState') );


	//Filters
		//Search the content for galery matches
		add_filter('the_content', array($eralha_crowdfunding_account_obj, 'addContent'));

	//scripts
}

//Initialize the admin panel
if (!function_exists("eralha_crowdfunding_account_init")) {
	function eralha_crowdfunding_account_init() {
		global $eralha_crowdfunding_account_obj;
		if (!isset($eralha_crowdfunding_account_obj)) {
			return;
		}
		if ( function_exists('add_submenu_page') ){
			//ADDS A LINK TO TO A SPECIFIC ADMIN PAGE
			add_menu_page('Clientes', 'Clientes', 'publish_posts', 'team-screen', array($eralha_crowdfunding_account_obj, 'printAdminPage'), 'dashicons-nametag');
			/*
				add_submenu_page('enc-screen', 'Gallery List', 'Gallery List', 'publish_posts', 'enc-screen', array($eralha_basket_obj, 'printAdminPage'));
				add_submenu_page('enc-screen', 'Create Gallery', 'Create Gallery', 'publish_posts', 'enc-screen', array($eralha_basket_obj, 'printAdminPage'));
			*/


		}
	}
}
?>