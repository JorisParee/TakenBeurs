<?php

include("sql_connect.php");

$task_id = $_POST['task_id'];
$task_id = $conn->real_escape_string($task_id);

$query = "SELECT `id` FROM `price` WHERE `task_id` = '" . $task_id . "';" ;

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
    $return = [];
    $json = json_encode($return);
    echo $json;
}

include("sql_close.php");

?>