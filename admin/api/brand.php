<?php
function hm_brand(){
	$res = get_results("select * from brand");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_brand(){
	$res = get_row("select * from brand where id = ".$_GET['id']);
	$res['name'] =stripslashes($res['name']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_brand(){
	$data = $_POST;
	$data['name'] =addslashes($data['name']);
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('brand', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Brand Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('brand', $data);
		return array('status' => 'Success', 'msg' => 'Brand Added Successfully');
	}
}

function hm_delete_brand(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('brand', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Brand Deleted Successfully');
}



function hm_change_brand_status(){

	update('brand', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Brand Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Brand Unpublished Successfully');
	}

}