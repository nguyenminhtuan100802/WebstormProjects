var inputMoney = document.getElementsByClassName("input_money");
var ketQua = document.getElementsByClassName("ket_qua");
var selectCurrent = document.getElementsByClassName("select_currency");
var currentCurrency = document.getElementsByClassName("current_currency");

inputMoney[0].addEventListener("keyup", ChuyenTienTe);

function ChuyenTienTe(){
    var text = selectCurrent[0].options[selectCurrent[0].selectedIndex].text;
    if(text === "VND -> USD"){
         var usd = inputMoney[0].value / 23000;
         currentCurrency[0].innerHTML = "VND"
        ketQua[0].innerHTML = "= " + usd + " USD";
    }
    else if (text === "USD -> VND"){
        var vnd = inputMoney[0].value * 23000;
        currentCurrency[0].innerHTML = "USD"
        ketQua[0].innerHTML = "= " + vnd + " VND";
    }
}
