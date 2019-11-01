<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$query =
"SELECT *,
  (SELECT COUNT(id) FROM `projects` WHERE `user_id`=u.id) AS total_projects
  FROM `user_table` AS u";

if (empty($_GET['username'])) {
  $id = $_GET['id'];
  $whereClause = " WHERE `id` = ?";
} else {
  $user = $_GET['username'];
  $whereClause = " WHERE `username` = ?";
}

$query = $query . $whereClause;
$stmt = $conn->prepare($query);

if (empty($_GET['username'])) {
  $stmt->bind_param('i', $id);
} else {
  $stmt->bind_param('s', $user);
}

$stmt->execute();
$result = $stmt->get_result();
$stmt->close();

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
