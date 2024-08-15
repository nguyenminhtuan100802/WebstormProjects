var currTile;
var otherTile;
function StartGame(){
    for (let i = 0; i < 25; i++) {
        let boardImagePiece = document.createElement("img");
        boardImagePiece.src = "../../../Images/imagePuzzle/blank.jpg";
        document.querySelector(".board").appendChild(boardImagePiece);

        //DRAG FUNCTIONALITY
        boardImagePiece.addEventListener("dragstart", dragStart); //click on image to drag
        boardImagePiece.addEventListener("dragover", dragOver);   //drag an image
        boardImagePiece.addEventListener("dragenter", dragEnter); //dragging an image into another one
        boardImagePiece.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        boardImagePiece.addEventListener("drop", dragDrop);       //drop an image onto another one
        boardImagePiece.addEventListener("dragend", dragEnd);      //after you completed dragDrop

    }

    for (let i = 1; i <= 25; i++) {
        let boardImagePiece = document.createElement("img");
        boardImagePiece.src = "../../../Images/imagePuzzle/" + i + ".jpg";
        document.querySelector(".pieces").appendChild(boardImagePiece);

        //DRAG FUNCTIONALITY
        boardImagePiece.addEventListener("dragstart", dragStart); //click on image to drag
        boardImagePiece.addEventListener("dragover", dragOver);   //drag an image
        boardImagePiece.addEventListener("dragenter", dragEnter); //dragging an image into another one
        boardImagePiece.addEventListener("dragleave", dragLeave); //dragging an image away from another one
        boardImagePiece.addEventListener("drop", dragDrop);       //drop an image onto another one
        boardImagePiece.addEventListener("dragend", dragEnd);      //after you completed dragDrop

    }
}

//DRAG TILES
function dragStart() {
    currTile = this; //this refers to image that was clicked on for dragging
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to image that is being dropped on
}

function dragEnd() {
    if (currTile.src.includes("blank")) {
        return;
    }
    currImg = currTile.src;
    otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    // turns += 1;
    // document.getElementById("turns").innerText = turns;
}