<?php
function hm_gallery(){
	$res = get_results("select * from gallery");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_gallery(){
	$res = get_row("select * from gallery where id = ".$_GET['id']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_gallery(){
	$data = $_POST;
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('gallery', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Gallery Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('gallery', $data);
		return array('status' => 'Success', 'msg' => 'Gallery Added Successfully');
	}
}

function hm_delete_gallery(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('gallery', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Gallery Deleted Successfully');
}



function hm_change_gallery_status(){

	update('gallery', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Gallery Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Gallery Unpublished Successfully');
	}

}