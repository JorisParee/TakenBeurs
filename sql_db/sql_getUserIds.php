<?php

include("sql_connect.php");

$query = "SELECT `id` FROM `user`;";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    // output data of each row, should only be one row.

    $return = [];
    while ($row = $result->fetch_assoc()){

        array_push($return, $row);
    }

    $json = json_encode($return);

    echo $json;

} else {
    echo "Error: 0 results";
}

include("sql_close.php");

?>