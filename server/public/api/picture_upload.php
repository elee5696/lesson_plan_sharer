<?php

// $temp =sys_get_temp_dir();

// echo $temp;
// echo php_ini_loaded_file();

if(isset($_FILES['image'])) {
  $errors=0;
  $picture_uploaded = $_FILES['image']['name'];
  $pictureSize = $_FILES['image']['size'];
  $picture_tempLocation = $_FILES['image']['tmp_name'];
  $file_type = $_FILES['image']['type'];
  $file_ext= strtolower(end(explode('.', $_FILES['image']['name'])));

  $extentions = array("jpeg", "jpg", "png");

  if(in_array($file_ext, $extentions)=== false){
    $errors++;
    throw new Exception('Image must be in JPEG or PNG format');
  }

  if($file_size > 2097152 ) {
    $errors++;
    throw new Exception('File is too large. Please upload a photo smaller than 5 MB');
  }

  if(empty($errors)==true){
    move_uploaded_file($picture_tempLocation, "/images/" . $picture_uploaded);
    echo "File Uploaded";
  } else {
    throw new Exception('File could not be uploaded');
  }
}

?>
