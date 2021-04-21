<?php

$servername = "localhost";
$username = "dejoris_takenbeurs";
$password = "YBnHm6F9zXA2";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>