<?php
function beforeAction($action)
{
	if (!sdk\frontend\User::getIsUserLoggedIn() || $action->controller->id != 'article') {
		header("Location: /admin");
		exit;
	}
}
