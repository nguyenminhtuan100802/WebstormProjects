var buttonTinhToan = document.getElementsByClassName("button_tinh_toan");
var ketQua = document.getElementsByClassName("ket_qua");

buttonTinhToan[0].addEventListener("click", ChuyenDoCtoDoF);

function ChuyenDoCtoDoF(){
    var inputDoC = document.getElementsByClassName("input_do_c");
    var doC = Number(inputDoC[0].value);
    var doF = ((doC * 9) / 5) + 32;
    ketQua[0].innerHTML = "Độ F: " + doF;
}