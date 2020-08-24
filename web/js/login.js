var username = document.querySelector(".username");
var admin = document.querySelector(".admin");
var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");

var user_inp = document.querySelector(".user");
var passw_inp = document.querySelector(".password");
var login = document.querySelector(".login")


console.log(passw_inp)
console.log(login)
username.onclick =function(){
    span1.style.background = "#333";
    span2.style.background = "none";
}

admin.onclick =function(){
    span2.style.background = "#333";
    span1.style.background = "none";
}

var dara =/^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;

login.onclick =function(){
    
    if(user_inp.value = dara  && user_inp.value.length >=11 ){
        location.href = "../html/index.html";
       
    }else{
        alert("请输入正确的格式！");

       
    }


}
// passw_inp.onclick =function(){
//     if(){

//     }

// } 
