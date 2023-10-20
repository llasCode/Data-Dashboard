<?php
include "connection.php";

header('Content-Type: application/json');
$query = "SELECT track_name, streams
    FROM top_songs
    ORDER BY streams DESC
    LIMIT 10
";
$res = mysqli_query($con,$query);

$rows = array();
while($row = mysqli_fetch_assoc($res)) {
    $rows[] = $row;
}

echo json_encode($rows);
?>