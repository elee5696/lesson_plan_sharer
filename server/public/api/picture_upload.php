<?php

if($_FILES['picture']) {

  $errors=0;
  $picture_uploaded = $_FILES['picture']['name'];
  $pictureSize = $_FILES['picture']['size'];
  $picture_tempName = $_FILES['picture']['tmp_name'];
  $file_type = $_FILES['picture']['type'];

  $filearray = explode('.', $picture_uploaded);
  $filestart = $filearray[0];
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

  $regexPat = '[\s]';
  if(preg_match($regexPat, $picture_uploaded)) {
    $picNameArray = explode(" ", $picture_uploaded);
    $picture_uploaded = implode($picNameArray);
  }

  if( empty($errors) === true ){
    $name = $picture_uploaded;
    $i = 1;

    while(file_exists('../images/' . $name))
    {
      $name = $filestart.$i;
      $name = $name.".".$file_ext;
      $i++;
    }

    move_uploaded_file($picture_tempName, "../images/$name");
  } else {
    throw new Exception('File could not be uploaded');
  }
}

?>
