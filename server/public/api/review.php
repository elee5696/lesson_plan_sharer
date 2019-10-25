<?php

require_once('db_connection.php');
require_once('functions.php');

if(!$conn) {
  throw new Exception('connection failed');
}

$_POST = get_body();
$user_id = $_POST['user_id'];
$comment = $_POST['comment'];
$project_id = $_POST['project_id'];

print_r($_POST);

$query =
"INSERT INTO `reviews`
  (`user_id`, `project_id` , `comment`, `time`)
  VALUES
  ('$user_id', '$project_id' ,'$comment', NOW())";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}
?>
