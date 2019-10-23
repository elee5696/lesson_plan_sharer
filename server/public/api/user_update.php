<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$_POST = get_body()[0];
$id = $_POST['id'];
$name = $_POST['name'];
$years = $_POST['years'];
$about_me = $_POST['about_me'];
$avatar = $_POST['avatar'];

$query =
"UPDATE `user_table`
  SET
    `name`='$name', `years`='$years', `about_me`='$about_me', `avatar`='$avatar'
  WHERE
    `id`=$id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}
?>
