<?php

include("sql_connect.php");

$name = $_POST['name'];
$name = mysql_real_escape_string($name);

$description = $_POST['description'];
$description = mysql_real_escape_string($description);

$query = "INSERT INTO `task` (`name`, `description`) VALUES ('".$name."','".$description."');";

if ($conn->query($query) === TRUE) {
    echo "Succes";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

include("sql_close.php");

?>