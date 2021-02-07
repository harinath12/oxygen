<?php

$array = array('config', 'common', 'blogs', 'upload', 'videogallery','pages','category','products','frontend','store','brand','testimonial');


foreach ($array as $key => $value) {
	include $value.'.php';
}

$_POST = (array) json_decode(file_get_contents('php://input'));

if(isset($_GET['debug'])){
	echo '<pre>';
	print_r($_POST);
}

function hm_login(){
	$username = $_POST['username'];
	$password = md5($_POST['password']);

	$res = get_row("select * from users where (username = '$username' or email = '$username') and password = '$password'");

	if(isset($res['id'])){
		return array('status' => 'Success', 'data' => $res);
	} else {
		return array('status' => 'Error', 'msg' => 'Invalid Credentials');
	}
}

if(isset($_GET['action'])){
	$data = $_GET['action']();
	if(isset($_GET['debug'])){
		echo '<pre>';
		print_r($data);
	} else {
		echo json_encode($data);
	}
}