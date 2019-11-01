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

$query = "SELECT r.`id`,user_id, username, project_id, `comment`, `time`, avatar
  FROM `reviews` as r JOIN user_table as u ON u.id=user_id WHERE r.`id`= LAST_INSERT_ID()";
$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$output = [];
while( $row = mysqli_fetch_assoc($result) ) {
  $row["id"] = intval($row['id']);
  $row["project_id"] = intval($row['project_id']);
  $row["user_id"] = intval($row["user_id"]);
  $output = $row;
}

print(json_encode($output));
?>
