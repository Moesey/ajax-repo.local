<?php

class ApiController extends Controller{
    public function action_index() {
	$this->model=new ApiModel();
	$users= $this->model->getUsers();
	$json= json_encode($users);
	header('Content-type: application/json; charset=utf-8');
	echo $json;
    }
}
