let buttonResetPassword = document.querySelector(".button_reset_password");
let labelSignUp = document.querySelector(".label_sign_up");
let labelSignIn = document.querySelector(".label_sign_in");
let inputEmail = document.querySelector(".input_email");
let labelDisplayError = document.querySelector(".label_display_error");

buttonResetPassword.addEventListener("click", function (){
    if (inputEmail.value === "") {
        labelDisplayError.style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
});
// sự kiện nút nhấn cho khung nhập email
inputEmail.addEventListener("keyup", function(e) {
    labelDisplayError.style.opacity = "0";
    inputEmail.style.border = "1px solid #DADAF2";
});
inputEmail.addEventListener("focusout", function(e) {
    if (inputEmail.value === ""){
        labelDisplayError.style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
});
// sự kiện chuyển trang login khi bấm sign in
labelSignIn.addEventListener("click", function() {
    location.href= "../Login/Login.html";
});
// sự kiện chuyển trang sign up khi bấm sign up
labelSignUp.addEventListener("click", function() {
    location.href= "../Sign_Up/Sign_Up.html";
});
