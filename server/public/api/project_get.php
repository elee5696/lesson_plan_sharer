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

$output = [];

while($row=mysqli_fetch_assoc($result)){

  $row["goals"] = explode(',', $row["goals"]);
  $row["materials"]= explode(',', $row["materials"]);
  $output[]=$row;
}

$encodedJson= json_encode($output);

print_r($encodedJson) ;
?>
