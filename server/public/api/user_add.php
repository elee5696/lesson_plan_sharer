<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$name = $_POST['name'];
$username = $_POST['username'];
$years = $_POST['years'];
$about_me = $_POST['about_me'];

require('picture_upload.php');

$query =
"INSERT INTO
`user_table` (`name`, `username`, `years`, `about_me`, `avatar`, `creation`)
VALUES
('$name', '$username' , '$years', '$about_me', '/images/$filename', NOW())";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$query = "SELECT MAX(`id`) AS 'id' FROM `user_table`";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$user_id = '';

while( $row = mysqli_fetch_assoc($result) ) {
  $user_id = $row['id'];
}

$query = "SELECT * FROM `user_table` WHERE id=$user_id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$output = [];

while( $row = mysqli_fetch_assoc($result) ) {
  $output = $row;
}

print_r(json_encode($output));
?>