<?php

include("sql_connect.php");

$persoon_id = $_POST['persoon_id'];
$persoon_id = $conn->real_escape_string($persoon_id);

$prijs_id = $_POST['prijs_id'];
$prijs_id = $conn->real_escape_string($prijs_id);

$query = "INSERT INTO `completed` (`price_id`, `user_id`) VALUES ('".$prijs_id."','".$persoon_id."');";

$result = $conn->query($query);

if ($result === TRUE) {
    echo "Succes";
} else {
    echo "Error " . $conn->error ;
}

include("sql_close.php");

?>