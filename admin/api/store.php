<?php
function hm_stores(){
	$res = get_results("select * from stores");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_stores(){
	$res = get_row("select * from stores where id = ".$_GET['id']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_store(){
	$data = $_POST;
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('stores', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Store Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		echo insert('stores', $data);
		return array('status' => 'Success', 'msg' => 'Store Added Successfully');
	}
}

function hm_delete_store(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('stores', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Store Deleted Successfully');
}



function hm_change_store_status(){

	update('stores', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Store Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Store Unpublished Successfully');
	}

}