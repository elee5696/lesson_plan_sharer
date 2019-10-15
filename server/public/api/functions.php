<?php

function error_handler( $error ) {

  $output = [
    "success" => false,
    "error" => $error -> getMessage()
  ];

  http_response_code(500);
  $json_output = json_encode($output);
  print $json_output;

}

function get_body() {

  $json = file_get_contents('php://input');
  $output = json_decode($json, true);
  return $output;

}

?>
