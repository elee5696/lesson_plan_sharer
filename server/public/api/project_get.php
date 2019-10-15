<?php

if(defined(INTERNAL)) {
  exit('Direct access is not allowed');
}


$query = "SELECT P.ID, P.NAME, DESCRIPTION, SET_UP, OUTCOMES,RATING,IMAGE,
GROUP_CONCAT(G.NAME) AS GOALS,
(SELECT GROUP_CONCAT(M.NAME) FROM MATERIALSLIST AS M WHERE P.ID = M.PROJECT_ID)
AS MATERIALS
FROM PROJECTS AS P
JOIN GOALSLIST AS G
ON P.ID = G.PROJECT_ID
GROUP BY P.ID";

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
