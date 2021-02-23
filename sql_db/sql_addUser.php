<?php

include("sql_connect.php");

$name = $_POST['name'];
$name = mysql_real_escape_string($name);

$description = $_POST['description'];
$description = mysql_real_escape_string($description);

$query = "INSERT INTO `user` (`name`) VALUES ('".$name."'); ";

if ($conn->query($sql) === TRUE) {
    echo "New user created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>