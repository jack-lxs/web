<?php
    $conn = mysqli_connect("localhost","root","","3306");

    if(!$conn){
        die("连接数据库失败：" .mysql_error());
    }
//设置数据库
    mysql_select_db("user",$conn);

//字符设置
    mysql_query("set name utf8");



?>