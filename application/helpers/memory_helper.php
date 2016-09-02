<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('heap')){
    function heap(){
      $pid = getmypid();
      $a = `ps aux -p $pid | awk 'END{print $4}'`;
      return $a*1;}}
