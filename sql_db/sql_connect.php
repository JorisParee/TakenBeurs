<?php
$servername = "localhost";
$username = "xxx";
$password = "xxx";
$dbname = "xxx";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  echo "Error: connection error";
  die("Connection failed: " . $conn->connect_error);
}

?>