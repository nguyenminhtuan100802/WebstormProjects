var diemTrungBinh = document.getElementById("dtb");
var tongDiem = document.getElementById("tong_diem");
var buttonTinhDiem = document.getElementById("button_tinh_diem");

buttonTinhDiem.addEventListener("click", TinhDiemTrungBinh);

function TinhDiemTrungBinh(){
    var diemLy = Number(document.getElementById("diem_ly").value);
    var diemHoa = Number(document.getElementById("diem_hoa").value);
    var diemSinh = Number(document.getElementById("diem_sinh").value);
    diemTrungBinh.innerHTML = "Điểm trung bình: " + (diemLy + diemHoa + diemSinh)/3;
    tongDiem.innerHTML = "Tổng điểm: " + (diemLy + diemHoa + diemSinh);
}
