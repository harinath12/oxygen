<?php
function hm_category(){
	$res = get_results("select * from category");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_category(){
	$res = get_row("select * from category where id = ".$_GET['id']);
	$res['name'] =stripslashes($res['name']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_category(){
	$data = $_POST;
	$data['name'] =addslashes($data['name']);
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('category', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Category Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('category', $data);
		return array('status' => 'Success', 'msg' => 'Category Added Successfully');
	}
}

function hm_delete_category(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('category', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Category Deleted Successfully');
}



function hm_change_category_status(){

	update('category', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Category Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Category Unpublished Successfully');
	}

}