<?php

require_once('db_connection.php');
require_once('functions.php');

if(!$conn) {
  throw new Exception('connection failed');
}

$stmt = $conn->prepare("INSERT INTO reviews (`user_id`, `project_id`, `comment`, `time`) VALUES (?, ?, ?, NOW())");
$stmt->bind_param("sss", $user_id, $project_id, $comment);

$_POST = get_body();
$user_id = $_POST['user_id'];
$comment = $_POST['comment'];
$project_id = $_POST['project_id'];

$stmt->execute();
$stmt->close();
?>
