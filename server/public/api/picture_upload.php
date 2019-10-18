<?php
$picture_path = 'NULL';


if($_FILES['picture']) {

  $errors=0;
  $picture_uploaded = $_FILES['picture']['name'];
  $pictureSize = $_FILES['picture']['size'];
  $picture_tempName = $_FILES['picture']['tmp_name'];
  $file_type = $_FILES['picture']['type'];

  $filearray = explode('.', $picture_uploaded);
  $fileend = end($filearray);
  $file_ext= strtolower($fileend);
  $extentions = array("jpeg", "jpg", "png");

  if(in_array($file_ext, $extentions)=== false){
    $errors++;
    throw new Exception('Image must be in JPG, JPEG or PNG format');
  }

  if($pictureSize > 2097152 ) {
    $errors++;
    throw new Exception('File is too large. Please upload a photo smaller than 5 MB');
  }

  if(empty($errors)==true){
    move_uploaded_file($picture_tempName, "../images/$picture_uploaded");
    // header('Location: ../index.html');
    echo $picture_uploaded;
  } else {
    throw new Exception('File could not be uploaded');
  }

  $picture_path = "/images/$picture_uploaded";

  print $picture_path;
}

?>
