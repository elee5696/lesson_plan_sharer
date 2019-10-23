<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$_PUT =get_body()[0];

print_r($_PUT);
$id = $_PUT['project_id'];
$userId = $_PUT['user_id'];
$name = $_PUT['name'];
$desc = $_PUT['description'];
$outcomes = $_PUT['outcomes'];
$image = $_PUT['image'];
$set_up = $_PUT['set_up'];
$goals = $_PUT['goals'];
$materials = $_PUT['materials'];


$editProjectsQuery = "UPDATE projects
SET `user_id` = '$userId', `name` = '$name', `description` = '$desc',
`outcomes` = '$outcomes', `set_up` = '$set_up'
WHERE `id` = '$id'";

$editImageQuery = "UPDATE images
SET `fileName` = '$image'
WHERE `project_id` = '$id'";


if($goals){
  foreach ($goals as $goal) {
  $goalQuery = "SELECT `id`
  FROM goals WHERE `name` = '$goal'";
    $result = mysqli_query($conn, $goalQuery);
    $queryResult = mysqli_num_rows($result);
  if(!$queryResult){
  $insertGoal ="INSERT INTO goals (`name`)
    SELECT * FROM (SELECT '$goal') AS tmp ";
  $goalResult = mysqli_query($conn, $insertGoal);
  $insertProject_Goal = "INSERT INTO `project_goals` (`project_id`, `goal_id`)
    VALUES ($project_id, $goal_id)";
  $projGoalResult = mysqli_query($conn, $insertProject_Goal);
  } else {
      while ($row = mysqli_fetch_assoc($result)) {
        $goal_id = $row['id'];
      }
      $updateGoals = "UPDATE project_goals
      SET `goal_id` = `$goal_id`
      WHERE `project_id` = '$id'";
  }
}


if ($materials) {
  foreach ($materials as $material) {
    $materialQuery = "SELECT `id`
FROM goals WHERE `name` = '$material'";
    $result = mysqli_query($conn, $materialQuery);
    $queryResult = mysqli_num_rows($result);
    if (!$queryResult) {
      $insertGoal = "INSERT INTO materials (`name`)
  SELECT * FROM (SELECT '$material') AS tmp ";
      $materialResult = mysqli_query($conn, $insertGoal);
      $insertProject_Material = "INSERT INTO `project_material` (`project_id`, `material_id`)
  VALUES ($project_id, $material_id)";
      $projMaterialResult = mysqli_query($conn, $insertProject_Material);
    } else {
      while ($row = mysqli_fetch_assoc($result)) {
        $material_id = $row['id'];
      }
      $updateGoals = "UPDATE project_goals
    SET `material_id` = `$material_id`
    WHERE `project_id` = '$id'";
    }
  }





























$result = mysqli_query($conn, $editProjectsQuery);
if (!$result) {
  throw new Exception('query failed');
}



// print('it worked!!');





?>
