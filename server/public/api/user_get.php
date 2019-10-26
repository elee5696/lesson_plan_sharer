<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

if (empty($_GET['username'])) {
  throw new Exception('User Id Needed');
}

$username = $_GET['username'];

$query =
"SELECT *,
  (SELECT COUNT(id) FROM `projects` WHERE `user_id`=u.id) AS total_projects
  FROM `user_table` AS u
  WHERE `username` = '$username'";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

if(mysqli_num_rows($result) === 0){
  $output = false;
  print_r(json_encode($output));
  exit();
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $row["id"] = intval($row["id"]);
  $output = $row;
}

print_r(json_encode($output));
?>
