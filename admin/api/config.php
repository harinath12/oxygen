<?php
//error_reporting(0);
$hostname		=	"localhost";
$username		=	"root";
$password	    =	"";
$database		=	"oxygen";

/*$hostname		=	"localhost";
$username		=	"oxygen";
$password	    =	"{n#ggNH]Ms?n";
$database		=	"oxygen";*/


global $db;
$db = mysqli_connect($hostname, $username, $password, $database) or die("not Server not connected");