<?php

if(defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

if (empty($_GET['id'])) {
  $whereClause = '';
} else {
  if (!is_numeric($_GET['id'])) {
    throw new Exception( 'id needs to be a number' );
  }
  $id = intval($_GET['id']);
  $whereClause = " WHERE project_id={$id}";
}

$query = "SELECT `id`, name, description, set_up, outcomes, rating, goals, materials
FROM projects
JOIN
(SELECT temp2.materials, temp.goals, temp.project_id
FROM
	(SELECT GROUP_CONCAT(`name`) AS materials,`project_id` FROM project_material
	JOIN materials ON material_id = id GROUP BY `project_id`)  AS temp2
 JOIN
	(SELECT GROUP_CONCAT(`name`) AS goals,`project_id`
		FROM project_goals
		JOIN goals ON goal_id = id GROUP BY `project_id`) AS temp
 ON temp2.project_id = temp.project_id) AS temp3
ON id = project_id"
. $whereClause;

$result=mysqli_query($conn, $query);
if(!$result) {
throw new Exception('query failed');
}

$output = [];
while($row=mysqli_fetch_assoc($result)){

  $row["goals"] = explode(',', $row["goals"]);
  $row["materials"]= explode(',', $row["materials"]);
  $output[]=$row;
}

$query = "SELECT `filename`, `url`, `project_id` FROM `images`";

$result=mysqli_query($conn, $query);
if(!$result) {
throw new Exception('query failed');
}

$image_data = [];
while($row=mysqli_fetch_assoc($result)){
  $image_data[]=$row;
}

foreach($output as &$project) {
  foreach($image_data as $image) {
    if($project['id'] == $image['project_id']) {
      if($image['url'] === 'NULL') {
        $project['image'] = $image['filename'];
      } else {
        $project['image'] = $image['url'];
      }
    }
  }
}

$encodedJson= json_encode($output);

print_r($encodedJson) ;
?>
