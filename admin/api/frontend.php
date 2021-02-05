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


function hm_get_category_and_products(){
	$response = get_results('select * from category where status = 1');

	$new_array = array();

	foreach ($response as $key => $value) {
		$value['products'] = get_results('select * from products where status = 1 and category = '.$value['id'].' group by brand');
		$new_array[] = $value;
	}

	return array('status' => 'Success', 'data' => $new_array);
}

function hm_get_all_products(){
	$response = get_results('select * from products where status = 1');

	return array('status' => 'Success', 'data' => $response);
}

function hm_get_recent_products(){
	$response = get_results('select * from products where status = 1 order by id desc limit 0, 5');

	return array('status' => 'Success', 'data' => $response);
}