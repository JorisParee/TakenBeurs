<?php

include("sql_connect.php");

$taak_id = $_POST['taak_id'];
$taak_id = $conn->real_escape_string($taak_id);

$prijs = $_POST['prijs'];
$prijs = $conn->real_escape_string($prijs);

$datum = $_POST['datum'];
$datum = $conn->real_escape_string($datum);

$query = "INSERT INTO `price` (`task_id`, `price`, `date`) VALUES ('".$taak_id."','".$prijs."','".$datum."');";

$result = $conn->query($query);

if ($result === TRUE) {
    echo "Succes";
} else {
    echo "Error " . $conn->error ;
}


include("sql_close.php");

?>