<?php
function hm_blogs(){
	$res = get_results("select * from blogs");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_blog(){
	$res = get_row("select * from blogs where id = ".$_GET['id']);
	$res['content'] = stripslashes($res['content']);
	$res['short_content'] = stripslashes($res['short_content']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_blog(){
	$data = $_POST;
	$data['content'] = addslashes($data['content']);
	$data['short_content'] = addslashes($data['short_content']);
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('blogs', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Blog Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		insert('blogs', $data);
		return array('status' => 'Success', 'msg' => 'Blog Added Successfully');
	}
}

function hm_delete_blog(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('blogs', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Blog Deleted Successfully');
}



function hm_change_blog_status(){

	update('blogs', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Blogs Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Blogs Unpublished Successfully');
	}

}


