<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$body = get_body();
$id = intval($body['id']);

$query =
"DELETE FROM `projects` WHERE `id`=$id;
DELETE FROM `project_goals` WHERE `project_id`=$id;
DELETE FROM `project_material` WHERE `project_id`=$id;
DELETE FROM `reviews` WHERE `project_id`=$id;
DELETE FROM `project_rating` WHERE `project_id`=$id;
DELETE FROM `images` WHERE `project_id`=$id;";

$result = mysqli_multi_query($conn, $query);
if ((!$result)) {
  throw new Exception( mysqli_error( $conn ) );
}

print $id;

?>
