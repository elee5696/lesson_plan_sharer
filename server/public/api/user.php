<?php
define('INTERNAL', true);

require_once('db_connection.php');
require_once('functions.php');

if(!$conn) {
  throw new Exception('connection failed');
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
  case 'GET':
    require('user_get.php');
    break;
  case 'POST':
    require('user_add.php');
    break;
  case 'PATCH':
    require('user_update.php');
    break;
  default:
    throw new Exception('Cannot ' . $method . ' /api/user.php');
}




?>
