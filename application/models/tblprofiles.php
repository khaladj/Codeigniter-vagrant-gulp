<?php
Class tblprofiles extends CI_Model{
 function load($profileid){
   $this -> db -> select('profileid,name, type, status,lat,lon');
   $this -> db -> from('tblprofiles');
   $this -> db -> where('profileid', $profileid);
   $this -> db -> limit(1);

   $query = $this -> db -> get();

   if($query -> num_rows() == 1){
     return $query->result();
   }else{
     return false;}}}
?>
