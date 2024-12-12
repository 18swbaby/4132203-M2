<?php

echo "Hello";

$name = "john cena";
$age = 99;

$arr = array("name",99);
$assoc_arr = ["name"=>"sirawit", "age"=>99];

echo $arr[0];
echo $assoc_arr["age"];
echo $arr;
echo "<br>";
var_dump($assoc_arr);
echo "<br>";
echo "hello $name";

$object = (object)$assoc_arr;
echo $object->name;

function plus($a, $b)
{
    return $a + $b;
}

$add_name = function($name){
    echo "hello $name";
};

$car = (object)["color" => "red", "name" => $add_name];
//echo $car->name("test");


?>

<?php
phpinfo()
?>