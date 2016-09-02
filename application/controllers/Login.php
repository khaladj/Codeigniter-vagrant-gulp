<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller{
 function __construct(){
   parent::__construct();
 }

 function index(){
   $this->load->helper(array('form'));
   $data['navbar']=false;
   $this->load->view('template/header',$data);
   $this->load->view('login');
   $this->load->view('template/footer');
 }

 function logout(){
   $this->session->unset_userdata('logged_in');
   session_destroy();
   redirect('login', 'refresh');}}
?>
