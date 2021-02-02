<?php
function hm_videogallery(){
	$res = get_results("select * from video_gallery");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_videogallery(){
	$res = get_row("select * from video_gallery where id = ".$_GET['id']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_videogallery(){
	$data = $_POST;
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('video_gallery', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Video Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('video_gallery', $data);
		return array('status' => 'Success', 'msg' => 'Video Added Successfully');
	}
}

function hm_delete_videogallery(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('video_gallery', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Video Deleted Successfully');
}



function hm_change_videogallery_status(){

	update('video_gallery', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Video Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Video Unpublished Successfully');
	}

}