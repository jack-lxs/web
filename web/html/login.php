<!DOCTYPE html>
<html lang="zh-cn">
   
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/login.css" >
    <title>登录页面</title>
</head>
<body>
    <div class="login-box">
        <img src="../images/login.jpg" alt="">
        <div class="login-contaner">
            <div class="login-logo">
                头像
                <img src="../images/0.jpg" alt="">

            </div>
            <div class="login-main">
                <div class="L-header">
                    <form action="login.php" method="POST">
                        <div class="L-top">
                            <div class="username">用户登录
                                <span id="span1" class="span1"></span>
                            </div>
                            
                            <div class="admin">管理员登录
                                <span id="span2"></span>
                            </div>
                            
                        </div>

                        <div class="login-bottom">
                            <div class="b-user">
                                <input type="text" class="user" placeholder="用户名：" name = "username">
                            
                            </div>
                            <div class="b-password">
                                <input type="password" class="password"  placeholder="请输入密码：" name = "password">
                            </div>
                        </div>
                    </form>
                </div>

                <div class="L-bottom">

                    <div class="top">
                        <input type="checkbox" name="">
                        <span class="next">下次自动登录</span>
                        <span class="lost">忘记密码?</span>
                    </div>

                    <div class="login">
                        <span><a href="../html/index.html"> 登录</a></span> 
                    </div>

                    <div class="register">
                        <span><a href="../html/regiter.html">注册</a> </span> 
                    </div>

                    <div class="order">
                        <div class="link">
                            <span></span>
                            <p>其他登录</p>
                            <span></span>
                        </div>

                        <div class="order-login">
                            <span class="qq"></span>
                            <span class="wchat"></span>
                            <span class="weibo"></span>
                        </div>
                    </div>




                </div>
           

            </div>

        </div>
    </div>
</body>
<script src="../js/login.js"></script>
</html>