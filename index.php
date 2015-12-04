<?php
	/*
		Plugin Name: Crowdfunging User Account
		Plugin URI: 
		Description: It Enables an account for a wordpress template used in crowdfunding websites, add user, edit user info, add projects, edit projects
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

    		wp_enqueue_style( 'bootstrap' );
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
				`iUserId` int(32) NOT NULL, 
				`iUserIdDestinatario` int(32) NOT NULL, 
				`iIDMenssagemResposta` int(32) NOT NULL, 
				`iData` int(32) NOT NULL, 
				`iLida` int(32) NOT NULL, 
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

		function getColaboradorSubscribers(){
			global $wpdb;
			global $current_user;

			$users = get_users(array(
				'order' => 'DESC',
				'orderby' => 'id',
				'role'  => 'subscriber'
			));

			$postObj = array();

			foreach ($users as $user) {
			  $user_id = $user->data->ID;
			  $user->data->treinador = get_user_meta($user_id, 'treinador');

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

			$users = get_users(array(
				'order' => 'DESC',
				'orderby' => 'id',
				'role'  => 'subscriber'
			));

			$postObj = array();

			foreach ($users as $user) {
			  $user_id = $user->data->ID;
			  $user->data->treinador = get_user_meta($user_id, 'treinador');

			  array_push($postObj, $user->data);

			}

			echo json_encode($postObj);

			wp_die();
		}

		function getUserInfo(){
			global $wpdb;
			
			$user_id = $_POST["user_id"];
			$user = get_user_by('id', $user_id);
			$user->data->meta = get_user_meta($user_id);

			$postObj = $user->data;

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

		function getUserMessages(){
			global $wpdb;
			global $current_user;
			
			$query = 'SELECT * FROM '.$this->table_menssages.' WHERE iUserIdDestinatario = '.$current_user->data->ID;
			$user_id = (isset($_POST["user_id"])) ? $_POST["user_id"] : $current_user->data->ID;

			//Se pedir mensagen para outro utilizador que não o logado
			if($user_id != $current_user->data->ID){
				$query .= ' AND iUserId = '.$user_id;
			}

			$results = $wpdb->get_results($query, OBJECT);

			echo json_encode($results);

			wp_die();
		}

		function setUserMeta(){
			global $wpdb;
			
			$user_meta = json_decode(stripslashes($_POST["meta"]));
			$user_id = $_POST["user_id"];

			$postObj = $user_meta;

			update_user_meta( $user_id, 'treinador', $user_meta->treinador[0]);

			echo json_encode($postObj);

			wp_die();
		}

		function printAdminPage(){
			global $wpdb;
			global $current_user;

			$pluginDir = str_replace("", "", plugin_dir_url(__FILE__));
			set_include_path($pluginDir);

			$successMSG = "";
			$errorMSG = "";

			include "css/admin__style.php";

			$content = "<div class='team__admin clearfix' ng-app='appModule'>";

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

				echo "<script>window.pluginsDir = '".plugins_url( '', __FILE__ )."';</script>";
				echo "<script>window.currentUserId = '".$current_user->data->ID."';</script>";
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/angular.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/main.js"></script>';

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

					switch ($view) {
					    case "info":
					        include "modules/frontend/account__info.php";
					        break;
					    case "new_proj":
					        include "modules/frontend/account__new_proj.php";
					        break;
					    case "proj_list":
					        include "modules/frontend/account__proj_list.php";
					        break;
					    default:
					    	$responseHTML = "";
					}
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
			add_menu_page('Doações', 'Clientes', 'publish_posts', 'team-screen', array($eralha_crowdfunding_account_obj, 'printAdminPage'));
			/*
				add_submenu_page('enc-screen', 'Gallery List', 'Gallery List', 'publish_posts', 'enc-screen', array($eralha_basket_obj, 'printAdminPage'));
				add_submenu_page('enc-screen', 'Create Gallery', 'Create Gallery', 'publish_posts', 'enc-screen', array($eralha_basket_obj, 'printAdminPage'));
			*/


		}
	}
}
?>