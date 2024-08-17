let boardPlay = document.querySelector(".board_play");
let statusPlayer = document.querySelector(".status_player");
let levelSelect = document.querySelector(".level_select");

let rows = 20;
let columns = 20;
let edgeLeft = [];
let edgeRight = [];
let edgeTop = [];
let edgeBottom = [];
let count = 0;
let countFontBold;
let flagWin = 0;

for (let i = 0; i < rows; i++) {
    edgeLeft.push(i * rows);
    edgeTop.push(i);
    edgeRight.push(i * rows + (rows - 1));
    edgeBottom.push(rows * (rows - 1) + i);
}
console.log("Left: " + edgeLeft);
console.log("Top: " + edgeTop);
console.log("Right: " + edgeRight);
console.log("Bottom: " + edgeBottom);

// vẽ bàn cờ caro
drawBoard();

// lụm ra danh sách các nút trong bàn cờ
let cells = boardPlay.querySelectorAll(".cell");
console.log(cells);

// xử lý sự kiện người dùng đánh cờ
for (let i = 0; i < rows * columns; i++) {
    cells[i].addEventListener("click", function (){
        countFontBold = 0;

        // chưa có người thắng thì tiếp tục chơi
        if (flagWin === 0){
            // người chơi đánh O
            if (count % 2 === 1 && cells[i].innerText === ""){
                cells[i].innerText = "O";
                cells[i].style.color = "red";
                statusPlayer.innerHTML = "Đang lượt: X";
                count++;

                // kểm tra win theo hàng dọc
                checkWinVertical(i, "O");
                // kểm tra win theo hàng ngang
                checkWinHorizontal(i, "O");
                // kểm tra win theo cạnh huyền
                checkWinCanhHuyen(i, "O");
                // kểm tra win theo cạnh sắc
                checkWinCanhSac(i, "O");

            }
            // người chơi đánh X
            else if (count % 2 === 0 && cells[i].innerText === ""){
                cells[i].innerText = "X";
                cells[i].style.color = "blue";
                statusPlayer.innerHTML = "Đang lượt: O";
                count++;

                // kểm tra win theo hàng dọc
                checkWinVertical(i, "X");
                // kểm tra win theo hàng ngang
                checkWinHorizontal(i, "X");
                // kểm tra win theo cạnh huyền
                checkWinCanhHuyen(i, "X");
                // kểm tra win theo cạnh sắc
                checkWinCanhSac(i, "X");

            }
            // console.log("count: " + count)
        }
    });
}

function drawBoard(){
    for (let i = 0; i < rows; i++) {
        let newRow = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            let newColumn = document.createElement("td");
            let newButton = document.createElement("p");
            newButton.className = "cell";
            // in số tượng trưng các dòng các cột để debug
            // newButton.innerText = i + "" + j;
            newColumn.appendChild(newButton);
            newColumn.className = "container_cell";
            newRow.appendChild(newColumn);
        }
        boardPlay.appendChild(newRow);
    }
}
function checkWinVertical(indexCell, syntaxPlayer){
    let countWinVertical = 0;
    for (let j = (indexCell % rows); j < rows * columns; j = j + rows) {
        if (cells[j].innerText === syntaxPlayer){
            countWinVertical++;
            if (countWinVertical === 5){
                console.log("Win theo hàng dọc");
                flagWin = 1;
                // in đậm hàng chiến thắng
                for (let k = j; k >= 0; k = k - rows) {
                    celebrateWinnerAndBoldFont(k);
                    countFontBold++;
                    if (countFontBold === 5){
                        break;
                    }
                }
                break;
            }
        }else {
            countWinVertical = 0;
        }
    }
}
function checkWinHorizontal(indexCell, syntaxPlayer){
    let countWinHorizontal;
    for (let j = (indexCell - (indexCell % rows)); j < ((indexCell - (indexCell % rows)) + rows); j = j + 1) {
        if (cells[j].innerText === syntaxPlayer){
            countWinHorizontal++;
            if (countWinHorizontal === 5){
                console.log("Win theo hàng ngang");
                flagWin = 1;
                // in đậm hàng chiến thắng
                for (let k = j; k >= 0; k = k - 1) {
                    celebrateWinnerAndBoldFont(k);
                    countFontBold++;
                    if (countFontBold === 5){
                        break;
                    }
                }
                break;
            }
        }else {
            countWinHorizontal = 0;
        }
    }
}
function calculateMinCanhHuyen(indexCell){
    let flagFindMinCanhHuyen = 0;
    while (true){
        for (let j = 0; j < rows; j++) {
            if (indexCell === edgeLeft[j]){
                flagFindMinCanhHuyen = 1;
                break;
            }else if (indexCell === edgeTop[j]){
                flagFindMinCanhHuyen = 1;
                break;
            }
        }
        if (flagFindMinCanhHuyen === 1){
            break;
        }
        indexCell = indexCell - (rows + 1);
    }
    return indexCell;
}
function calculateMaxCanhHuyen(indexCell){
    let flagFindMaxCanhHuyen = 0;
    while (true){
        for (let j = 0; j < rows; j++) {
            if (indexCell === edgeBottom[j]){
                flagFindMaxCanhHuyen = 1;
                break;
            }else if (indexCell === edgeRight[j]) {
                flagFindMaxCanhHuyen = 1;
                break;
            }
        }
        if (flagFindMaxCanhHuyen === 1){
            break;
        }
        indexCell = indexCell + (rows + 1);
    }
    return indexCell;
}
function checkWinCanhHuyen(indexCell, syntaxPlayer){
    let countWinCanhHuyen = 0;
    let minCanhHuyen = calculateMinCanhHuyen(indexCell);
    let maxCanhHuyen = calculateMaxCanhHuyen(indexCell);
    console.log(syntaxPlayer + ": MinCanhHuyen: " + minCanhHuyen);
    console.log(syntaxPlayer + ": MaxCanhHuyen: " + maxCanhHuyen);

    for (let j = minCanhHuyen; j <= maxCanhHuyen; j = j + (rows + 1)) {
        if (cells[j].innerText === syntaxPlayer){
            countWinCanhHuyen++;
            if (countWinCanhHuyen === 5){
                console.log("Win theo cạnh huyển");
                flagWin = 1;
                // in đậm hàng chiến thắng
                for (let k = j; k >= 0; k = k - (rows + 1)) {
                    celebrateWinnerAndBoldFont(k);
                    countFontBold++;
                    if (countFontBold === 5){
                        break;
                    }
                }
                break;
            }
        }else {
            countWinCanhHuyen = 0;
        }
    }
}
function calculateMinCanhSac(indexCell){
    let flagFindMinCanhSac = 0;
    while (true){
        for (let j = 0; j < rows; j++) {
            if (indexCell === edgeTop[j]){
                flagFindMinCanhSac = 1;
                break;
            }else if (indexCell === edgeRight[j]){
                flagFindMinCanhSac = 1;
                break;
            }
        }
        if (flagFindMinCanhSac === 1){
            break;
        }
        indexCell = indexCell - (rows - 1);
    }
    return indexCell;
}
function calculateMaxCanhSac(indexCell){
    let flagFindMaxCanhSac = 0;
    while (true){
        for (let j = 0; j < rows; j++) {
            if (indexCell === edgeLeft[j]){
                flagFindMaxCanhSac = 1;
                break;
            }else if (indexCell === edgeBottom[j]) {
                flagFindMaxCanhSac = 1;
                break;
            }
        }
        if (flagFindMaxCanhSac === 1){
            break;
        }
        indexCell = indexCell + (rows - 1);
    }
    return indexCell;
}
function checkWinCanhSac(indexCell, syntaxPlayer){
    let countWinCanhSac = 0;
    let minCanhSac = calculateMinCanhSac(indexCell);
    let maxCanhSac = calculateMaxCanhSac(indexCell);

    console.log(syntaxPlayer + ": MinCanhSac: " + minCanhSac);
    console.log(syntaxPlayer + ": MaxCanhSac: " + maxCanhSac);
    for (let j = minCanhSac; j <= maxCanhSac; j = j + (rows - 1)) {
        if (cells[j].innerText === syntaxPlayer){
            countWinCanhSac++;
            if (countWinCanhSac === 5){
                console.log("Win theo cạnh sắc");
                flagWin = 1;
                // in đậm hàng chiến thắng
                for (let k = j; k >= 0; k = k - (rows - 1)) {
                    celebrateWinnerAndBoldFont(k);
                    countFontBold++;
                    if (countFontBold === 5){
                        break;
                    }
                }
                break;
            }
        }else {
            countWinCanhSac = 0;
        }
    }
}
function celebrateWinnerAndBoldFont(indexCell){
    let gifVictoryImage = document.querySelectorAll(".gif_victory img");
    for (let i = 0; i < gifVictoryImage.length; i++) {
        gifVictoryImage[i].style.opacity = "1";
    }
    cells[indexCell].style.fontWeight = "bold";
    cells[indexCell].style.fontSize = "30px";
}



