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
		var $nonceSalt = "er-plugin-nonce-";
		var $path = "/account/"; //path to account pages
		var $table_menssages;

		function eralha_crowdfunding_account(){
			global $wpdb;

			$table_menssages = $wpdb->prefix.$this->optionsName."_menssagens";

			$this->table_menssages = $table_menssages;
		}

		function init(){
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

		function configAjaxHoocks($class, $hoocks){
			foreach ($hoocks as $key => $value){
				if($value == "priv"){
					add_action( 'wp_ajax_'.$key, array($class, $key) );
				}
				if($value == "nopriv"){
					add_action( 'wp_ajax_nopriv_'.$key, array($class, $key) );
				}
			}
		}

		function generateNonces(){
			$salt = $this->nonceSalt;
			$hoocks = $this->ajaxHoocks;
			$nonces = array();

			if(is_user_logged_in()){
				global $current_user;

				$current_userID = $current_user->data->ID;
				$salt .= $current_userID;
			}

			foreach ($hoocks as $key => $value){
				$hoocks[$key] = wp_create_nonce($salt.$key);

				if(is_user_logged_in() && $value == "priv"){
					$nonces[$key] = $hoocks[$key];
				}
				if($value == "nopriv"){
					$nonces[$key] = $hoocks[$key];
				}
			}

			return json_encode($nonces);
		}

		function verifyNonce($action){
			$salt = $this->nonceSalt;

			if(is_user_logged_in()){
				global $current_user;

				$current_userID = $current_user->data->ID;
				$salt .= $current_userID;
			}

			$error = array(
				"error" => "NOT_ALLOWED",
				"action" => $action
			);

			if (!wp_verify_nonce($_POST["nonce"], $salt.$action)){ die(json_encode($error)); }
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
				echo "<script>window.nonces = ".$this->generateNonces().";</script>";
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/angular.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/directives/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/controllers/main.js"></script>';
				echo '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/services/main.js"></script>';

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

		function createContext($data){
			$params = array(
		      'http' => array(
		          'method' => 'POST',
		          'content' => http_build_query($data)
			   ));
			   $context = stream_context_create($params);
			return $context;
		}

		function addContent($atts, $content=''){
			global $wpdb;
			global $current_user;

			$current_userID = $current_user->data->ID;
			$pluginDir = str_replace("", "", plugin_dir_url(__FILE__));
			set_include_path($pluginDir);

			$responseHTML = "";

			//if(strpos($content, "[er-crowd-account]") !== false){
				if(is_user_logged_in()){
					$responseHTML .= "<script>window.currentUserId = '".$current_user->data->ID."';</script>";
				}

				//este é o menu de navegação que será sempre ncluido
				$responseHTML .= file_get_contents($pluginDir."templates/frontend/account__nav.php", false);

				$responseHTML .= "<link rel='stylesheet' href='".plugins_url( '', __FILE__ )."/css/admin__style.css' type='text/css' />";
				$responseHTML .= "<script>var ajaxurl = '".admin_url('admin-ajax.php')."';</script>";
				$responseHTML .= "<script>window.pluginsDir = '".plugins_url( '', __FILE__ )."';</script>";
				$responseHTML .= "<script>window.nonces = ".$this->generateNonces().";</script>";
				$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/angular.js"></script>';
				$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/main__frontend.js"></script>';
				$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/directives/main.js"></script>';
				$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/controllers/main__frontend.js"></script>';
				$responseHTML .= '<script type="text/javascript" src="'.plugins_url( '', __FILE__ ).'/js/services/main.js"></script>';
			//}

			//$content = str_replace("[er-crowd-account]", $responseHTML, $content);

			return $responseHTML;
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

		//Hoocking ajax functions by a array config
		include "comp/ajax__calls.php";

		$ajaxInterface = new ajax__component();

		//Set name of table messages in order to make querys work
		//$ajaxInterface->nonceSalt = $eralha_crowdfunding_account_obj->nonceSalt;
		$ajaxInterface->table_menssages = $eralha_crowdfunding_account_obj->table_menssages;

		//Setting hoocks equal to ajax__component hoocks in order to generate the required nonces
		$eralha_crowdfunding_account_obj->ajaxHoocks = $ajaxInterface->ajaxHoocks;
		$eralha_crowdfunding_account_obj->configAjaxHoocks($ajaxInterface, $ajaxInterface->ajaxHoocks);



	//Filters
		//Search the content for galery matches
		//add_filter('the_content', array($eralha_crowdfunding_account_obj, 'addContent'));
		add_shortcode( 'er-crowd-account', array($eralha_crowdfunding_account_obj, 'addContent' ) );

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