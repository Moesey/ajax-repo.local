<?php

class ApiController extends Controller {

    public function action_index() {
	$this->model = new ApiModel();
	$users = $this->model->getUsers();
	$json = json_encode($users);
	header('Content-type: application/json; charset=utf-8');
	echo $json;
    }

    public function action_add() {
	// if ($name === null || $surname === null || $email === NULL) {
	//     return false;
	// } else {
	//     $this->model = new ApiModel();
	//     $this->model->addStudent($name, $surname, $email);
	// }
	// header('Content-type: application/json; charset=utf-8');
		$name = $_POST['name'];
		$surname = $_POST['surname'];
		$email = $_POST['email'];
		$this->model = new ApiModel();
		$this->model->addStudent($name, $surname, $email);
		// header('Location: http://ajax-repo.local');
    }

}
