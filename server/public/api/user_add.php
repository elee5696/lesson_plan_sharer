<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

if( isset($_POST['id']) ) {
  require('user_update.php');
} else {

  $name = $_POST['name'];
  $username = $_POST['username'];
  $years = $_POST['years'];
  $about_me = $_POST['about_me'];

  require('picture_upload.php');

  $query =
  "SELECT * FROM user_table WHERE `username`='$username'";

  $result = mysqli_query($conn, $query);
  if(!$result) {
    throw new Exception('query failed');
  }

  if(mysqli_num_rows($result) > 0){
    $output = false;
    print_r(json_encode($output));
    exit();
  }

  $query =
  "INSERT INTO
  `user_table` (`name`, `username`, `years`, `about_me`, `avatar`, `creation`)
  VALUES
  ( ?, ?, ?, ?, ?, NOW())";

  $path = "/images/$filename";

  $stmt = $conn->prepare($query);
  $stmt->bind_param("ssiss", $name, $username, $years, $about_me, $path);

  $stmt->execute();
  $stmt->close();

  $query = "SELECT MAX(`id`) AS 'id' FROM `user_table`";

  $result = mysqli_query($conn, $query);
  if(!$result) {
    throw new Exception('query failed');
  }

  $user_id = '';

  while( $row = mysqli_fetch_assoc($result) ) {
    $user_id = intval($row['id']);
  }

  $query = "SELECT * FROM `user_table` WHERE id=$user_id";

  $result = mysqli_query($conn, $query);
  if(!$result) {
    throw new Exception('query failed');
  }

  $output = [];

  while( $row = mysqli_fetch_assoc($result) ) {
    $row['id'] = intval($row['id']);
    $output = $row;
  }

  print_r(json_encode($output));

}


?>
