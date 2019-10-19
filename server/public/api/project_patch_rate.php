<?php

if(defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$json = get_body();

$id = $json['id'];
$rating = $json['rating'];

$query =
"SELECT * FROM `project_rating` WHERE `project_id`=$id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$update_rating_data = [];
while($row = mysqli_fetch_assoc($result)){
  $update_rating_data = $row;
}

$new_count = $update_rating_data['count'] + 1;
$new_total = $update_rating_data['total_rating'] + $rating;
$new_rating = $new_total / $new_count;


$query =
"UPDATE `project_rating`
SET
`rating`=$new_rating,`count`=$new_count, `total_rating`=$new_total
WHERE `project_id`=$id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$query =
"SELECT * FROM `project_rating` WHERE `project_id`=$id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$output = [];
while($row = mysqli_fetch_assoc($result)) {
  $output = $row;
}

$encodedJson= json_encode($output);

print_r($encodedJson);
?>
