<?php
	$postObj = (object) [ 
		'postData' => $_POST
	];

	$context = $this->createContext($postObj);

	//PARSE VIEW
	$responseHTML = file_get_contents($pluginDir."templates/backend/list__users.php", false, $context);

	$content .= $responseHTML;

?>