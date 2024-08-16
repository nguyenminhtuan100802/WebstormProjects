let buttonLogin = document.querySelector(".button_login");
let inputEmail = document.querySelector(".input_email");
let inputPassword = document.querySelector(".input_password");
let displayError = document.querySelectorAll(".label_display_error");
let labelForgetPassword = document.querySelector(".label_forget_password");
let labelSignUp = document.querySelector(".label_sign_up span");

// sự kiện nhấn forget password
labelForgetPassword.addEventListener("click", function (){
    location.href = "../Forget_Password/Forget_Password.html";
});
// sự kiện nhấn nút sign up
labelSignUp.addEventListener("click", function (){
   location.href = "../Sign_Up/Sign_Up.html"
});
// sự kiện nút nhấn đăng nhập
buttonLogin.addEventListener("click", function (){
    if (inputEmail.value === "") {
        displayError[0].style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
    if (inputPassword.value === "") {
        displayError[1].style.opacity = "1";
        inputPassword.style.border = "1px solid red";
    }

    //  nhập đúng email + pass sẽ chuyển đến trang home
    if (inputEmail.value === "admin" && inputPassword.value === "admin"){
        location.href= "../Home.html"
    }
    else{
        alert("Tài khoản không tồn tại")
    }
});

// sự kiện nút nhấn cho khung nhập email
inputEmail.addEventListener("keyup", function(e) {
    displayError[0].style.opacity = "0";
    inputEmail.style.border = "1px solid #DADAF2";
});
inputEmail.addEventListener("focusout", function(e) {
    if (inputEmail.value === ""){
        displayError[0].style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
});

// sự kiện nút nhấn cho khung nhập password
inputPassword.addEventListener("keyup", function(e) {
    displayError[1].style.opacity = "0";
    inputPassword.style.border = "1px solid #DADAF2";
});
inputPassword.addEventListener("focusout", function(e) {
    if (inputPassword.value === ""){
        displayError[1].style.opacity = "1";
        inputPassword.style.border = "1px solid red";
    }
});