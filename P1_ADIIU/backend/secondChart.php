<?php
include "connection.php";

header('Content-Type: application/json');
$query = "SELECT released_year
    FROM top_songs
";
$res = mysqli_query($con, $query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>