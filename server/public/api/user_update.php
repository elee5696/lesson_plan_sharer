<?php

$post_body = get_body();

if (isset($_FILES['picture'])) {
  require('picture_upload.php');
  $field = 'avatar';
  $value = "/images/$filename";
  $id = $_POST['id'];
} else {
  $field = $post_body['field'];
  $value = $post_body['value'];
  $id = $post_body['id'];
}

$query =
"UPDATE `user_table`
  SET
    `$field`='$value'
  WHERE
    `id`=$id";

print $query;

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$query =
"SELECT * FROM `user_table`
  WHERE
    `id`=$id";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $row['id'] = intval($row['id']);
  $output = $row;
}

print_r(json_encode($output));
?>
