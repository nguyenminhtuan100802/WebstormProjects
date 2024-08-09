var inputBanKinh = document.getElementsByClassName("input_ban_kinh");
var ketQua = document.getElementsByClassName("ket_qua");

inputBanKinh[0].addEventListener("keyup", TinhChuViDienTich);

function TinhChuViDienTich(){
    var chuVi = 2 * Math.PI * inputBanKinh[0].value;
    var dienTich = Math.PI * inputBanKinh[0].value * inputBanKinh[0].value;

    ketQua[0].innerHTML = "Chu vi: " + chuVi + "<br>" + " Diện tích: " + dienTich;
}