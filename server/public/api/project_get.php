<?php

if(defined(INTERNAL)) {
  exit('Direct access is not allowed');
}

$query =
"SELECT
    p.id,
    p.name,
    description,
    set_up,
    outcomes,
    goals,
    materials,
    youtubeLink,
    user_id,
    image,
    username,
    u.name as author
FROM
    user_table u
JOIN
    (
    SELECT
        `id`,
        `name`,
        `description`,
        `set_up`,
        `outcomes`,
        `goals`,
        `materials`,
        `user_id`,
        `youtubeLink`,
        `filename` AS image
    FROM
        projects AS p
    JOIN
        (
        SELECT
            p.project_id,
            filename,
            materials,
            goals
        FROM
            images AS i
        JOIN
            (
            SELECT
                m.project_id,
                materials,
                goals
            FROM
                (
                SELECT
                    pm.project_id,
                    GROUP_CONCAT(m.name) AS materials
                FROM
                    project_material AS pm
                JOIN
                    materials AS m
                ON
                    pm.material_id = m.id
                GROUP BY
                    pm.project_id
            ) AS m
        JOIN
            (
            SELECT
                pg.project_id,
                GROUP_CONCAT(g.name) AS goals
            FROM
                project_goals AS pg
            JOIN
                goals AS g
            ON
                pg.goal_id = g.id
            GROUP BY
                pg.project_id
        ) AS g
    ON
        m.project_id = g.project_id
        ) AS p
    ON
        p.project_id = i.project_id
    ) AS d
ON
    p.id = d.project_id
) AS p
ON
    p.user_id = u.id";

if (isset($_GET['field']) && isset($_GET['value'])) {
  $field = $_GET['field'];
  $value = $_GET['value'];
  $whereClause = " WHERE p.$field LIKE ?";
  if($field === 'user') {
    $whereClause = " WHERE u.name LIKE ? OR username LIKE ?";
  }
  $query = $query . $whereClause;
}


if (isset($_GET['id'])) {
  if (!is_numeric($_GET['id'])) {
    throw new Exception( 'id needs to be a number' );
  }
  $id = intval($_GET['id']);
  $whereClause = " WHERE p.id={$id}";
  $query = $query . $whereClause;
}

$stmt = $conn->prepare($query);

if (isset($_GET['field']) && isset($_GET['value'])) {
  if($field === 'user') {
    $strval = "%".$value."%";
    $stmt->bind_param("ss", $strval, $strval);
  } else {
    $strval = "%".$value."%";
    $stmt->bind_param("s", $strval);
  }
}

$stmt->execute();


$result = $stmt->get_result();
$num = mysqli_num_rows($result);
$stmt->close();

if($num <= 0 ) {
  throw new Exception( 'no projects' );
  exit();
}

$output = [];
while($row = mysqli_fetch_assoc($result)){
  $row["goals"] = explode(',', $row["goals"]);
  $row["materials"] = explode(',', $row["materials"]);
  $row["author_data"] = array(
    "id" => intval($row["user_id"]),
    "name" => $row["author"],
    "username" => $row["username"]
  );
  unset($row["user_id"]);
  unset($row["author"]);
  unset($row["username"]);
  $output[] = $row;
}

$query = "SELECT `rating`, `project_id`, `count` FROM `project_rating`";

$result = mysqli_query($conn, $query);
if(!$result) {
throw new Exception('query failed');
}

$rating_data = [];
while($row = mysqli_fetch_assoc($result)){
  $rating_data[] = $row;
}

foreach($output as &$project) {
  foreach($rating_data as $rating) {
    if($project['id'] == $rating['project_id']) {
      $project["rating_data"] = array(
        "rating" => intval($rating['rating']),
        "count" => intval($rating['count'])
      );
      unset($rating['rating']);
      unset($rating['count']);
    }
  }
}

$query =
"SELECT user_id, username, project_id, `comment`, `time`, avatar
  FROM `reviews` JOIN user_table ON id=user_id ORDER BY `time` DESC";

$result = mysqli_query($conn, $query);
if(!$result) {
  throw new Exception('query failed');
}

$review_data = [];
while($row = mysqli_fetch_assoc($result)){
  $review_data[] = $row;
}

foreach($output as &$project) {
  foreach($review_data as $review) {
    $review["project_id"] = intval($review['project_id']);
    $review["user_id"] = intval($review["user_id"]);
    if($project['id'] === $review['project_id']) {
      $project['reviews'][] = $review;
    }
  }
}

$encodedJson = json_encode($output);

print_r($encodedJson);



?>
