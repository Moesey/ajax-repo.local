<?php

class ApiModel extends Model {
    
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
    
    public function addStudent($name, $surname, $email){
        if($this->db->connect_errno===0){
            $query='INSERT INTO students (name, surname, email) values ("'.$name.'", "'.$surname.'", "'.$email.'")';
            $this->db->query($query);
        }
    }
    
    public function deleteStudent($id){
        if($this->db->connect_errno === 0){
            $query = 'DELETE from students where id='.$id;
            $this->db->query($query);
        }
    }
}

