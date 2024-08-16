let inputEmail = document.querySelector(".input_email");
let inputCreatePassword = document.querySelector(".input_create_password");
let inputConfirmPassword = document.querySelector(".input_confirm_password");
let buttonSignUp = document.querySelector(".button_sign_up");
let labelSignIn = document.querySelector(".label_sign_in span");
let labelDisplayError = document.querySelectorAll(".label_display_error");

// sự kiện nhấn sign in
labelSignIn.addEventListener("click", function() {
    location.href = "../Login/Login.html";
});
//  sự kiện nhấn nút sign up
buttonSignUp.addEventListener("click", function() {
    if (inputEmail.value === "") {
        labelDisplayError[0].style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
    if (inputCreatePassword.value === "") {
        labelDisplayError[1].style.opacity = "1";
        inputCreatePassword.style.border = "1px solid red";
    }
    if (inputConfirmPassword.value === "") {
        labelDisplayError[2].style.opacity = "1";
        inputConfirmPassword.style.border = "1px solid red";
    }

    //  nhập đúng email + pass sẽ chuyển đến trang home
    if (inputEmail.value !== "" && inputCreatePassword.value !== "" && inputConfirmPassword.value !== "" && (inputCreatePassword.value === inputConfirmPassword.value)){
        alert("Tạo tài khoản thành công");
    }
    else{
        alert("Tạo tài khoản thất bại");
    }
});
// sự kiện nút nhấn cho khung nhập email
inputEmail.addEventListener("keyup", function(e) {
    labelDisplayError[0].style.opacity = "0";
    inputEmail.style.border = "1px solid #DADAF2";
});
inputEmail.addEventListener("focusout", function(e) {
    if (inputEmail.value === ""){
        labelDisplayError[0].style.opacity = "1";
        inputEmail.style.border = "1px solid red";
    }
});

// sự kiện nút nhấn cho khung nhập create password
inputCreatePassword.addEventListener("keyup", function(e) {
    labelDisplayError[1].style.opacity = "0";
    inputCreatePassword.style.border = "1px solid #DADAF2";
});
inputCreatePassword.addEventListener("focusout", function(e) {
    if (inputCreatePassword.value === ""){
        labelDisplayError[1].style.opacity = "1";
        inputCreatePassword.style.border = "1px solid red";
    }
});
// sự kiện nút nhấn cho khung nhập confirm password
inputConfirmPassword.addEventListener("keyup", function(e) {
    labelDisplayError[2].style.opacity = "0";
    inputConfirmPassword.style.border = "1px solid #DADAF2";
});
inputConfirmPassword.addEventListener("focusout", function(e) {
    if (inputConfirmPassword.value === ""){
        labelDisplayError[2].style.opacity = "1";
        inputConfirmPassword.style.border = "1px solid red";
    }
});

