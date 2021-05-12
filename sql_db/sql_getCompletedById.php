<?php

include("sql_connect.php");

$id = $_POST['id'];
$id = $conn->real_escape_string($id);

$query = "SELECT `id`, `price_id`, `user_id` FROM `completed` WHERE `id` = '".$id."' ;";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    // output data of each row, should only be one row.

    $row = $result->fetch_assoc();

    $return = $row;

    $json = json_encode($return);

    echo $json;

} else {
    echo "Error: 0 results";
}


include("sql_close.php");

?>