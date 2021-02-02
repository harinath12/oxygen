<?php
function hm_testimonials(){
	$res = get_results("select * from testimonial");
	return array('status' => 'Success', 'data' => $res);
}

function hm_get_testimonial(){
	$res = get_row("select * from testimonial where id = ".$_GET['id']);
	$res['content'] = stripcslashes($res['content']);
	return array('status' => 'Success', 'data' => $res);
}

function hm_save_testimonial(){
	$data = $_POST;
	$data['content'] = addslashes($data['content']);
	if(isset($data['id'])){
		$id = $data['id'];
		unset($data['id']);
		update('testimonial', $data, array('id' => $id));
		return array('status' => 'Success', 'msg' => 'Testimonial Updated Successfully');
	} else {
		$data['created_on'] = date('Y-m-d H:i:s');
		$data['status']= 1;
		echo insert('testimonial', $data);
		return array('status' => 'Success', 'msg' => 'Testimonial1 Added Successfully');
	}
}

function hm_delete_testimonial(){
	$data = $_POST['delete'];
	foreach ($data as $key => $value) {

		delete('testimonial', array('id' => $value));

	}

	return array('status' => 'Success', 'msg' => 'Testimonial Deleted Successfully');
}



function hm_change_testimonial_status(){

	update('testimonial', array('status' => $_POST['status']), array('id' => $_POST['id']));

	if($_POST['status']){
		return array('status' => 'Success', 'msg' => 'Testimonial Published Successfully');
	} else {
		return array('status' => 'Success', 'msg' => 'Testimonial Unpublished Successfully');
	}

}