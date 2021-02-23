<?php

include("sql_connect.php");

$name = $_POST['name'];
$name = mysql_real_escape_string($name);

$description = $_POST['description'];
$description = mysql_real_escape_string($description);

$query = "INSERT INTO task (name, description) VALUES ('".$name."','".$description."') ";

if ($conn->query($sql) === TRUE) {
    echo "New task created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>