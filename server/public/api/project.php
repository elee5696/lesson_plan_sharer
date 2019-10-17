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
    require('project_get.php');
    break;
  case 'POST':
    require('project_add.php');
    require('picture_upload.php');
    break;
  default:
    throw new Exception('Cannot ' . $method . ' /api/project.php');
}

?>
