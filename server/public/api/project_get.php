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

$query = "SELECT `id`, name, description, `set_up`, `outcomes`, `goals`, `materials`, `user_id`
FROM projects
JOIN
(SELECT mt.materials, gt.goals, gt.project_id
FROM
	(SELECT GROUP_CONCAT(`name`) AS materials,`project_id` FROM project_material
	JOIN materials ON material_id = id GROUP BY `project_id`)  AS mt
 JOIN
	(SELECT GROUP_CONCAT(`name`) AS goals,`project_id`
		FROM project_goals
		JOIN goals ON goal_id = id GROUP BY `project_id`) AS gt
 ON mt.project_id = gt.project_id) AS tmp
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
      if($image['url'] === NULL) {
        $project['image'] = $image['filename'];
      } else {
        $project['image'] = $image['url'];
      }
    }
  }
}

$query = "SELECT `rating`, `project_id`, `count` FROM `project_rating`";

$result=mysqli_query($conn, $query);
if(!$result) {
throw new Exception('query failed');
}

$rating_data = [];
while($row=mysqli_fetch_assoc($result)){
  $rating_data[]=$row;
}

foreach($output as &$project) {
  foreach($rating_data as $rating) {
    if($project['id'] == $rating['project_id']) {
      if($rating['rating'] === 'NULL') {
        $project['rating'] = NULL;
      } else {
        $project['rating'] = $rating['rating'];
        $project['rating_count'] = $rating['count'];
      }
    }
  }
}

$query = "SELECT * FROM `user_table`";

$result = mysqli_query($conn, $query);
if(!$result) {
throw new Exception('query failed');
}

$user_data = [];
while($row = mysqli_fetch_assoc($result)){
  $user_data[] = $row;
}

foreach($output as &$project) {
  foreach($user_data as $user) {
    if($project['user_id'] === $user['id']) {
      $project['user_data'] = $user;
    }
  }
}

$encodedJson = json_encode($output);

print_r($encodedJson);

?>
