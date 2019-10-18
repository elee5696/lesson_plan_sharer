<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$_POST = get_body();

$name = $_POST['name'];
$description = $_POST['description'];
$outcomes = $_POST['outcomes'];
$image = $_POST['image'];
$set_up = $_POST['set_up'];

$goals = $_POST['goals'];
$materials = $_POST['materials'];

$query =
"INSERT INTO
`projects` (`name`, `description`, `outcomes`, `set_up`)
VALUES
('$name', '$description', '$outcomes', '$set_up')";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$query = "SELECT MAX(`id`) AS 'id' FROM `projects`";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$project_id = '';
while( $row = mysqli_fetch_assoc($result) ) {
  $project_id = $row['id'];
}

if ((!$result)) {
throw new Exception( mysqli_error( $conn ) );
}

$query =
"INSERT INTO `images` (`filename`, `project_id`, `url`)
  VALUES
  ('$picture_path', $project_id, '$image')";

foreach($goals as $goal) {

  $query =
  "INSERT INTO goals (`name`)
    SELECT * FROM (SELECT '$goal') AS tmp
    WHERE NOT EXISTS (
      SELECT name FROM goals WHERE `name`='$goal'
      ) LIMIT 1";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }

  $query = "SELECT `id` FROM goals WHERE `name`='$goal'";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }

  $goal_id = '';
  while( $row = mysqli_fetch_assoc($result) ) {
    $goal_id = $row['id'];
  }

  $query =
  "INSERT INTO `project_goals` (`project_id`, `goal_id`)
    VALUES ($project_id, $goal_id)";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }
}

foreach($materials as $material) {

  $query =
  "INSERT INTO goals (name)
    SELECT * FROM (SELECT '$material') AS tmp
    WHERE NOT EXISTS (
      SELECT name FROM goals WHERE name = '$material'
      ) LIMIT 1";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }

  $query = "SELECT `id` FROM goals WHERE `name`='$material'";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }

  $material_id = '';
  while( $row = mysqli_fetch_assoc($result) ) {
    $material_id = $row['id'];
  }

  $query =
  "INSERT INTO `project_material` (`project_id`, `material_id`)
    VALUES ($project_id, $material_id)";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }

  print $project_id;
}
?>
