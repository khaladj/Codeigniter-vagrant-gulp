<?php
Class tblusers extends CI_Model{
 function login($username, $password){
   $this -> db -> select('profileid, username, password,status');
   $this -> db -> from('tblusers');
   $this -> db -> where('username', $username);
   $this -> db -> where('password', MD5($password));
   $this -> db -> limit(1);

   $query = $this -> db -> get();

   if($query -> num_rows() == 1){
     return $query->result();
   }else{
     return false;}}}
?>
