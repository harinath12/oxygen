<?php
function hm_getpage(){

	$response = get_row('select * from pages where slug = "'.$_GET['id'].'"');

	return array('status' => 'Success', 'data' => $response);

}

function hm_getcategory(){

	$response = get_results('select * from category');

	return array('status' => 'Success', 'data' => $response);

}

function hm_getproducts(){

	$response = get_results('select * from products');

	return array('status' => 'Success', 'data' => $response);

}
function hm_getstores(){

	$response = get_results('select * from stores');

	return array('status' => 'Success', 'data' => $response);

}

function hm_getblog(){

	$response = get_results('select * from blogs');

	return array('status' => 'Success', 'data' => $response);

}
