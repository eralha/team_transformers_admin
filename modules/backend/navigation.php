<?php
	//PARSE VIEW
	$postObj = (object) [ 
		'nav_'.$view => $view,
	];

	//Se for admin o ecran de navegação é outro
	if($current_user->caps["administrator"] == 1) {
		$postObj->is_admin = 1;
	}

	$context = $this->createContext($postObj);

	$responseHTML = file_get_contents($pluginDir."templates/backend/navigation.php", false, $context);
	$content .= $responseHTML;
?>