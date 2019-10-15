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

$query = "SELECT P.ID, P.NAME, DESCRIPTION, SET_UP, OUTCOMES,RATING,IMAGE,
GROUP_CONCAT(G.NAME) AS GOALS,
(SELECT GROUP_CONCAT(M.NAME) FROM MATERIALSLIST AS M WHERE P.ID = M.PROJECT_ID)
AS MATERIALS
FROM PROJECTS AS P
JOIN GOALSLIST AS G
ON P.ID = G.PROJECT_ID"
. $whereClause .
" GROUP BY P.ID";

$result=mysqli_query($conn, $query);

$output = [];

while($row=mysqli_fetch_assoc($result)){

  $row["GOALS"] = explode(',', $row["GOALS"]);
  $row["MATERIALS"]= explode(',', $row["MATERIALS"]);
  $output[]=$row;
}

$encodedJson= json_encode($output);

print_r($encodedJson) ;
?>
