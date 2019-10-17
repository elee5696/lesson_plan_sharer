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
  $whereClause = " WHERE P.ID={$id}";
}

$query = "SELECT P.id, P.name, P.description, P.set_up, P.outcomes,P.rating,
(SELECT GROUP_CONCAT(M.`name`) AS Materials FROM `project_material` AS PM JOIN `materials` AS M ON PM.material_id = M.id)
AS materials,
(SELECT GROUP_CONCAT(G.`name`) AS Goals FROM `project_goals` AS PG JOIN `goals` AS G ON PG.goal_id = G.id) AS goals
FROM projects AS P
JOIN materials AS M
ON M.ID = P.ID
GROUP BY P.ID";

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
