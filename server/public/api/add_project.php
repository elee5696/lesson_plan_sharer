<?php
if (!defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$name = $_POST['name'];
$description = $_POST['description'];
$goals = $_POST['goals'];
$materials = $_POST['materials'];
$outcomes = $_POST['outcomes'];
$image = $_POST['image'];

$query =
"INSERT INTO
`PROJECTS` ('name', 'description', 'outcomes', 'image')
VALUES
($name, $description, $outcomes, $image)";

$result = $mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('query failed');
}

$insert_statement = "";

foreach ($goals as $goal) {
  $insert_statement = $insert_statement . "(" . $goal . "),";
}

$query =
"INSERT INTO
`MATERIALSLIST` ('name', 'project_id')
VALUES "
. $insert_statement .

$output = [
  success => 'true',
  data => "$name, $description, $goals, $materials, $outcomes, $image"
];

print_r($output);

?>
