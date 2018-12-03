<?php

class ApiModel {
    
    private $db;

    public function __construct() {
	$this->db = new mysqli(HOST, LOGIN, PASS, NAME);
    }
    
    public function getUsers(){
        if($this->db->connect_errno===0){
            $query='select * from students';
            $res = $this->db->query($query);
            if($res){
               return $res->fetch_all(MYSQLI_ASSOC);
            } else{
                return false;
            }
        }
    }
}

