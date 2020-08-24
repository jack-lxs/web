<?php
    include ('conn.php');
    if(!isset($_POST['.login'])){
        exit('非法访问');
    }

$username = $_POST['username'];
$password = $_POST['password'];
$pwd  = $_POST['pwd']


//写入到数据库
    $sql= "insert into register(username,password,pwd)value('$username','$password','$pwd') ";
    $res = mysql_query($sql,$conn);

    if($res){
        exit('用户注册成功 点击此处<a href="login.php>登录</a>"' );
    }else{
        echo'添加失败',mysql_error();


    }





















?>