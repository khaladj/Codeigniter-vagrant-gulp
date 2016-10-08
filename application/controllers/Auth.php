<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Auth extends CI_Controller{

 function __construct(){
   parent::__construct();
   $this->load->model('tblusers','',true);}

 function index(){
   //This method will have the credentials validation
   $this->load->library('form_validation');

   $this->form_validation->set_rules('username', 'Username', 'trim | xss_clean ');
   $this->form_validation->set_rules('username', 'Email', 'valid_email');
   $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean|callback_check_database');

   if($this->form_validation->run() == false){
     //Field validation failed.  User redirected to login page
     $data['navbar']=false;
		 $this->load->view('template/header',$data);
     $this->load->view('login');
     $this->load->view('template/footer');
   }else{
     //Go to private area
     redirect('map', 'refresh');}}


 function check_database($password){
   //Field validation succeeded.  Validate against database
   $username = $this->input->post('username');
   //query the database
   $result = $this->tblusers->login($username, $password);
   if($result){
     $sess_array = array();
     foreach($result as $row){
       if ( $row->status ){
         $sess_array = array('profileid' => $row->profileid,'username' => $row->username);
         $this->session->set_userdata('logged_in', $sess_array);
       }else{
         $this->form_validation->set_message('check_database', 'This account has been suspended.');
         return false;}}
       return true;
      }else{
       $this->form_validation->set_message('check_database', 'Invalid username or password.');
       return false;}}}
?>
