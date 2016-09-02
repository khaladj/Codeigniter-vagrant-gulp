<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Map extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

 function __construct(){
		parent::__construct();
	  $this->load->model('tblprofiles','',TRUE);}


 function index(){
 	 if($this->session->userdata('logged_in')){

 		$session_data = $this->session->userdata('logged_in');
		$profileid = $session_data['profileid'];
		$profile = $this->tblprofiles->load($profileid);

 		 $data['username'] = $session_data['username'];
		 $data['profileid']=$profileid ;
		 $data['profilename']= $profile[0]->name;
		 $data['navbar']=true;
		 $data['map']='active';
		 $this->load->view('template/header',$data);
		 $this->load->view('map', $data);
		 $this->load->view('template/footer');
	 }else{
 		 //If no session, redirect to login page
 		 redirect('login', 'refresh');}}


 function getdata(){
	 if(!$this->session->userdata('logged_in')){
		 redirect('login', 'refresh');}

	 if (!$this->input->is_ajax_request()) {
 				exit('{"code":0,"message":"Bad request"}');}
	 echo $this->encryption->encrypt('{"code":0,"message":"Bad request"}');}


 function getinfo(){
	 if(!$this->session->userdata('logged_in')){
		redirect('login', 'refresh');}

	 if (!$this->input->is_ajax_request()) {
 				exit('{"code":0,"message":"Bad request"}');}
	 echo " | ". heap() . " KB | " . round(memory_get_usage()/1000,2) . " KB | %" .round(sys_getloadavg()[0],2) ;
 }}
