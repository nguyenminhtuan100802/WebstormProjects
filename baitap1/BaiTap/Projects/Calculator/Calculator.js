let buttons = document.getElementsByClassName("button");
let screen = document.getElementsByClassName("screen");
let result = document.getElementsByClassName("result");
let buttonDel = document.getElementsByClassName("button_del");
let buttonAc = document.getElementsByClassName("button_ac");
let buttonEqual = document.getElementsByClassName("button_equal");

// sự kiện xóa từng ký tự
buttonDel[0].addEventListener("click", function() {
    let res = screen[0].innerHTML;
    screen[0].innerHTML = res.substring(0, res.length - 1);
    if (res.length === 1){
        result[0].innerHTML = "";
    }
});
// xóa sạch màn hình
buttonAc[0].addEventListener("click", function() {
    screen[0].innerHTML = "";
    result[0].innerHTML = "";
})
// xuất đáp án
buttonEqual[0].addEventListener("click", function() {
   let res = screen[0].innerHTML;
   result[0].innerHTML = eval(res);
});
// bấm từng nút 0-9 + - * /
for (let i = 0; i < buttons.length; i++){
    console.log(buttons[i].value)
    buttons[i].addEventListener("click", function (){
        screen[0].innerHTML = screen[0].innerHTML + buttons[i].value;
    });
}


