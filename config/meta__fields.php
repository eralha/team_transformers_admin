<?php
    
    $ajaxHoocks = array(
        "userLogin" => "nopriv",
        "getColaborators",
        "getSubscribers",
        "getColaboradorSubscribers",
        "getUser",
        "setUserMeta",
        "getUserMessages",
        "getUserToReadMessages",
        "getUserInbox",
        "getUserOutbox",
        "sendMessageToUser",
        "sendMessageToAdmin",
        "updateUserData",
        "updateMessageState"
    );


    add_action( 'wp_ajax_nopriv_userLogin', array($eralha_crowdfunding_account_obj, 'userLogin') );
    add_action( 'wp_ajax_getColaborators', array($eralha_crowdfunding_account_obj, 'getColaborators') );
    add_action( 'wp_ajax_getSubscribers', array($eralha_crowdfunding_account_obj, 'getSubscribers') );
    add_action( 'wp_ajax_getColaboradorSubscribers', array($eralha_crowdfunding_account_obj, 'getColaboradorSubscribers') );
    add_action( 'wp_ajax_getUser', array($eralha_crowdfunding_account_obj, 'getUser') );
    add_action( 'wp_ajax_setUserMeta', array($eralha_crowdfunding_account_obj, 'setUserMeta') );
    add_action( 'wp_ajax_getUserMessages', array($eralha_crowdfunding_account_obj, 'getUserMessages') );
    add_action( 'wp_ajax_getUserToReadMessages', array($eralha_crowdfunding_account_obj, 'getUserToReadMessages') );
    add_action( 'wp_ajax_getUserInbox', array($eralha_crowdfunding_account_obj, 'getUserInbox') );
    add_action( 'wp_ajax_getUserOutbox', array($eralha_crowdfunding_account_obj, 'getUserOutbox') );
    add_action( 'wp_ajax_sendMessageToUser', array($eralha_crowdfunding_account_obj, 'sendMessageToUser') );
    add_action( 'wp_ajax_sendMessageToAdmin', array($eralha_crowdfunding_account_obj, 'sendMessageToAdmin') );
    add_action( 'wp_ajax_updateUserData', array($eralha_crowdfunding_account_obj, 'updateUserData') );
    add_action( 'wp_ajax_updateMessageState', array($eralha_crowdfunding_account_obj, 'updateMessageState') );

    function generateConfig(){

    }


?>