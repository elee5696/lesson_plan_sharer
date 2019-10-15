<?php

if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$_POST = get_body();

$name = $_POST['name'];
$description = $_POST['description'];
$goals = $_POST['goals'];
$materials = $_POST['materials'];
$outcomes = $_POST['outcomes'];
$image = $_POST['image'];
$set_up = $_POST['set_up'];

$query =
"INSERT INTO
`PROJECTS` (`NAME`, `DESCRIPTION`, `OUTCOMES`, `IMAGE`, `SET_UP`)
VALUES
('$name', '$description', '$outcomes', '$image', '$set_up')";

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('query failed');
}

$query =
"SELECT ID FROM PROJECTS ORDER BY id DESC LIMIT 0, 1";

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('query failed');
}

$id = mysqli_fetch_assoc($result)['ID'];

$insert_statement = "";

foreach ($goals as $goal) {
  $insert_statement = $insert_statement . "('$goal'".","."'$id'),";
}

$insert_statement = substr($insert_statement, 0 , -1);

$query =
"INSERT INTO
`GOALSLIST` (`NAME`, `PROJECT_ID`)
VALUES "
. $insert_statement;

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('query failed');
}

$insert_statement = "";

foreach ($materials as $material) {
  $insert_statement = $insert_statement . "('$material'".","."'$id'),";
}

$insert_statement = substr($insert_statement, 0 , -1);

$query =
"INSERT INTO
`MATERIALSLIST` (`NAME`, `PROJECT_ID`)
VALUES "
. $insert_statement;

$result = mysqli_query($conn, $query);

if(!$result) {
  throw new Exception('query failed');
}

$output = [
  "success" => 'true'
];

print_r($output);

?>
