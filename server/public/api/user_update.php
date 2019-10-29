<?php
if (defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

require('picture_upload.php');
$_POST = get_body();

if ($filename) {
  $field = 'avatar';
  $value = '/images/$filename';
} else {
  $field = $_POST['field'];
  $value = $_POST['value'];
}

$id = $_POST['id'];


$query =
"UPDATE `user_table`
  SET
    `$field`='$value'
  WHERE
    `id`=$id";

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
  $output = $row;
}

print_r(json_encode($output));
?>
