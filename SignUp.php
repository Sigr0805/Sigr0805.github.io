<?php


$username = filter_input(INPUT_GET, "Username", FILTER_SANITIZE_SPECIAL_CHARS);

echo"<h1>".htmlspecialchars($username, ENT_QUOTES);."</h1>";



 ?>
