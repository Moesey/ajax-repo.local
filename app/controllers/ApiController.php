<?php

class ApiController extends Controller
{

    public function action_index()
    {
        $this->model = new ApiModel();
        $users = $this->model->getUsers();
        $json = json_encode($users);
        header('Content-type: application/json; charset=utf-8');
        echo $json;
    }

<<<<<<< HEAD
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
=======
    public function action_add()
    {
        $name = filter_input(INPUT_POST, 'name');
        $surname = filter_input(INPUT_POST, 'surname');
        $email = filter_input(INPUT_POST, 'email');
        if ($name !== null || $surname !== null || $email !== NULL) {
            $this->model = new ApiModel();
            $this->model->addStudent($name, $surname, $email);
	}
>>>>>>> dev
    }

}
