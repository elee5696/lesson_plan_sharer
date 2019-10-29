<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$_PUT =get_body();

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

$pictureChange =  mysqli_query($conn, $editImageQuery);


if($goals){

  $timesToDelete = count($goals);
  for ($index = 0; $index < $timesToDelete; $index++) {
    $deleteGoals = "DELETE FROM project_goals
      WHERE project_id = '$id'";
    $runDeleteGoal =  mysqli_query($conn, $deleteGoals);
  }
  foreach ($goals as $goal) {
  $goalQuery = "SELECT `id`
  FROM goals WHERE `name` = '$goal'";
    $result = mysqli_query($conn, $goalQuery);
    $queryResult = mysqli_num_rows($result);


  if(!$queryResult){
  $insertGoal ="INSERT INTO goals (`name`)
    VALUES ('$goal')";
  $goalResult = mysqli_query($conn, $insertGoal);

  $getIdQuery = "SELECT `id` FROM goals WHERE `name` = '$goal'";

  $goalIdResult = mysqli_query($conn, $getIdQuery);

  $goal_id ='';
  while ($row = mysqli_fetch_assoc($goalIdResult)) {
    $goal_id = $row['id'];
  }

  $insertProject_Goal = "INSERT INTO `project_goals` (`project_id`, `goal_id`)
    VALUES ($id, $goal_id)";

  $projGoalResult = mysqli_query($conn, $insertProject_Goal);

  } else {

      $goal_id = '';
      while ($row = mysqli_fetch_assoc($result)) {
        $goal_id = $row['id'];
      }
      $insertGoalToProjectIds = "INSERT INTO project_goals (`project_id`,`goal_id`)
      VALUES ('$id', $goal_id)";

      $goalResult = mysqli_query($conn, $insertGoalToProjectIds);

  }
 }
}



if ($materials) {

  $timesToDelete = count($materials);
  for ($index = 0; $index < $timesToDelete; $index++) {
    $deleteMaterials = "DELETE FROM project_material
      WHERE project_id = '$id'";
    $runDeleteMaterials =  mysqli_query($conn, $deleteMaterials);
  }
  foreach ($materials as $material) {
    $materialQuery = "SELECT `id`
  FROM materials WHERE `name` = '$material'";
    $result = mysqli_query($conn, $materialQuery);
    $queryResult = mysqli_num_rows($result);

    if (!$queryResult) {
      $insertMaterial = "INSERT INTO materials (`name`)
    VALUES ('$material')";
      $materialResult = mysqli_query($conn, $insertMaterial);

      $getIdQuery = "SELECT `id` FROM materials WHERE `name` = '$material'";

      $materialIdResult = mysqli_query($conn, $getIdQuery);

      $material_id = '';
      while ($row = mysqli_fetch_assoc($materialIdResult)) {
        $material_id = $row['id'];
      }

      $insertProject_Material = "INSERT INTO `project_material` (`project_id`, `material_id`)
    VALUES ($id, $material_id)";

      $projMaterialResult = mysqli_query($conn, $insertProject_Material);
    } else {

      $material_id = '';
      while ($row = mysqli_fetch_assoc($result)) {
        $material_id = $row['id'];
      }
      $insertMaterialToProjectIds = "INSERT INTO project_materials (`project_id`,`material_id`)
      VALUES ('$id', $material_id)";

      $materialResult = mysqli_query($conn, $insertMaterialToProjectIds);
    }
  }
}


$result = mysqli_query($conn, $editProjectsQuery);
if (!$result) {
  throw new Exception('query failed');
}


?>
