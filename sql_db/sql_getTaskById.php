<?php

include("sql_connect.php");

$id = $_POST['id'];
$id = mysql_real_escape_string($id);

$query = "SELECT `id`, `name`, `description` FROM `task` WHERE `id` = '".$id."' ;";

$result = $conn->query($query);

if ($result->num_rows > 0) {
// output data of each row
$row = $result->fetch_assoc();
//should only be one row.

$return -> id =  $row["id"];
$return -> name = $row["name"];
$return -> description = $row["description"];

$json = json_encode($return);

echo $json;


} else {
echo "Error: 0 results";
}


include("sql_close.php");

?>