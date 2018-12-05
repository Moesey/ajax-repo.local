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

    public function action_add()
    {
        $name = filter_input(INPUT_POST, 'name');
        $surname = filter_input(INPUT_POST, 'surname');
        $email = filter_input(INPUT_POST, 'email');
        if ($name !== null || $surname !== null || $email !== NULL) {
            $this->model = new ApiModel();
            $this->model->addStudent($name, $surname, $email);
	}
    }

}
