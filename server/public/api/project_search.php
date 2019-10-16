<?php

// if(defined(INTERNAL)) {
//   exit('Direct access is not allowed');
// }

if (empty($_GET['field']) && empty($_GET['value'])) {
  $whereClause = '';
} else {
  if (!is_string($_GET['value'])) {
    throw new Exception('value needs to be a string');
  }
  $field = $_GET['field'];
  $value = $_GET['value'];
  $whereClause = " WHERE $field LIKE %$value%"
}

?>
