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
		parent::__construct();}

 function index(){
 	 if($this->session->userdata('logged_in')){
 		 $session_data = $this->session->userdata('logged_in');
 		 $data['username'] = $session_data['username'];
 		 $this->load->view('map', $data);
	 }else{
 		 //If no session, redirect to login page
 		 redirect('login', 'refresh');}}


 function getdata(){
	 if (!$this->input->is_ajax_request()) {
 				exit('{"code":0,"message":"Bad request"}');}
	 echo $this->encryption->encrypt('{"code":0,"message":"Bad request"}');}}
