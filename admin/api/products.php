<?php
function hm_products(){
	$res = get_results("select * from products");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_products(){
	$res = get_row("select * from products where id = ".$_GET['id']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_product(){
	$data = $_POST;
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('products', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Product Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('products', $data);
		return array('status' => 'Success', 'msg' => 'Product Added Successfully');
	}
}

function hm_delete_product(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('products', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Product Deleted Successfully');
}



function hm_change_product_status(){

	update('products', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Product Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Product Unpublished Successfully');
	}

}