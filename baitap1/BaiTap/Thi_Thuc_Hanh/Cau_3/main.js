let bookArray = [];
let bookHeadingArray = ["Mã số", "Tên", "Năm xuất bản", "Số lượng", "Tình trạng"]
let buttonAddBook = document.querySelector(".button_add_book");
let buttonConfirmAddBook = document.querySelector(".button_confirm_add_book");
let inputBookId = document.querySelector(".book_id");
let inputBookName = document.querySelector(".book_name");
let inputBookYear = document.querySelector(".book_year");
let inputBookQuantity = document.querySelector(".book_quantity");
let tableBooks = document.querySelector(".table_books");
let formAddBook = document.querySelector(".form_add_book");
let html;

buttonAddBook.addEventListener("click", function() {
    formAddBook.style.opacity = "1";
});
buttonConfirmAddBook.addEventListener("click", function() {
    if (inputBookId.value === "" ||
        inputBookName.value === "" ||
        inputBookYear.value === "" ||
        inputBookQuantity.value === "") {
        alert("Please enter book information");
    }
    else {
        if (1 <= Number(inputBookId.value[0]) && Number(inputBookId.value[0]) <= 5
            && 0 <= Number(inputBookId.value[1]) && Number(inputBookId.value[1]) <= 9
            && 0 <= Number(inputBookId.value[2]) && Number(inputBookId.value[2]) <= 9
            && 0 <= Number(inputBookId.value[3]) && Number(inputBookId.value[3]) <= 9
            && 0 <= Number(inputBookId.value[4]) && Number(inputBookId.value[4]) <= 9
            && inputBookId.value.length === 5
            && inputBookYear.value.length <= 4) {
            let book = new Book(inputBookId.value, inputBookName.value, inputBookYear.value, inputBookQuantity.value);
            bookArray.push([book.id, book.name, book.year, book.numberOfBook]);
            formAddBook.style.opacity = "0";
            inputBookId.value = "";
            inputBookName.value = "";
            inputBookYear.value = "";
            inputBookQuantity.value = "";
            updateTable();
        }
        else {
            alert("sai");
            inputBookId.value = "";
            inputBookName.value = "";
            inputBookYear.value = "";
            inputBookQuantity.value = "";
        }
    }
});

function updateTable() {
    html = "";
    html += "<tr>";
    for (let i = 0; i < bookHeadingArray.length; i++) {
        html += "<td>" + bookHeadingArray[i] + "</td>";
    }
    html += "</tr>";

    for (let i = 0; i < bookArray.length; i++) {
        html += "<tr>";
        for (let j = 0; j < bookArray[0].length; j++) {
            html += "<td>" + bookArray[i][j] + "</td>";
        }
        html += "</tr>";
    }
    console.log(bookArray);
    tableBooks.innerHTML = html;
}