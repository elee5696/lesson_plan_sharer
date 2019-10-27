<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$stmt = $conn->prepare("INSERT INTO projects (`name`, `description`, `outcomes`, `set_up`, `user_id`) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("ssssi", $name, $description, $outcomes, $set_up, $user_id);

$_POST = get_body();
$name = $_POST['name'];
$description = $_POST['description'];
$outcomes = $_POST['outcomes'];
$set_up = $_POST['set_up'];
$user_id = $_POST['user_id'];

$stmt->execute();
$stmt->close();

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

$stmt = $conn->prepare("INSERT INTO images (`filename`, `project_id`) VALUES (?, ?)");
$stmt->bind_param("si", $image, $project_id);

$image = $_POST['image'];

$stmt->execute();
$stmt->close();

$goals = $_POST['goals'];

foreach($goals as $goal) {
  $stmt = $conn->prepare("INSERT INTO goals (`name`)
    SELECT * FROM (SELECT ?) AS tmp
    WHERE NOT EXISTS (
      SELECT `name` FROM goals WHERE `name`=?
      ) LIMIT 1");

  $stmt->bind_param("ss", $goal, $goal);
  $stmt->execute();
  $stmt->close();

  $stmt = $conn->prepare("SELECT `id` FROM goals WHERE `name`=?");
  $stmt->bind_param("s", $goal);
  $stmt->execute();
  $stmt->store_result();
  $stmt->bind_result($col1);
  while ($stmt->fetch()) {
    $goal_id = $col1;
  }
  $stmt->close();

  $query =
  "INSERT INTO `project_goals` (`project_id`, `goal_id`)
    VALUES ($project_id, $goal_id)";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }
}

$materials = $_POST['materials'];

foreach($materials as $material) {
  $stmt = $conn->prepare("INSERT INTO materials (`name`)
    SELECT * FROM (SELECT ?) AS tmp
    WHERE NOT EXISTS (
      SELECT `name` FROM materials WHERE `name`=?
      ) LIMIT 1");

  $stmt->bind_param("ss", $material, $material);
  $stmt->execute();
  $stmt->close();

  $stmt = $conn->prepare("SELECT `id` FROM materials WHERE `name`=?");
  $stmt->bind_param("s", $material);
  $stmt->execute();
  $stmt->store_result();
  $stmt->bind_result($col1);
  while ($stmt->fetch()) {
    $material_id = $col1;
  }
  $stmt->close();

  $query =
  "INSERT INTO `project_material` (`project_id`, `material_id`)
    VALUES ($project_id, $material_id)";

  $result = mysqli_query($conn, $query);
  if(!$result) {
  throw new Exception('query failed');
  }
}

$query =
  "INSERT INTO `project_rating` (`project_id`)
    VALUES ($project_id)";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

print($project_id);
?>
