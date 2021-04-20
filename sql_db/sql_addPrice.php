<?php

include("sql_connect.php");

$taak_id = $_POST['taak_id'];
$taak_id = mysql_real_escape_string($taak_id);

$prijs = $_POST['prijs'];
$prijs = mysql_real_escape_string($prijs);

$datum = $_POST['datum'];
$datum = mysql_real_escape_string($datum);

$query = "INSERT INTO `price` (`task_id`, `price`, `date`) VALUES ('".$taak_id."','".$prijs."','".$datum."');";

if ($conn->query($query) === TRUE) {
    echo "Succes";
} else {
    echo "Error: " . $query . "<br>" . $conn->error;
}

include("sql_close.php");

?>