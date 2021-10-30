var board;

var onDragStart = function (source, piece, position, orientation) {

};

var onDrop = function (source, target) {

};

var onSnapEnd = function () {

};

var onMouseoverSquare = function(square, piece) {

};

var onMouseoutSquare = function(square, piece) {

};

var config = {
    position: 'start',
    draggable: true,
    orientation: 'white', //Change Orientation (Player Plays Black/White)
    showNotation: false, //Show Notation true/false
    dropOffBoard: 'trash', //Drop off board 'trash'/'snapback'

    //Change move speed
    moveSpeed: 'slow',
    snapbackSpeed: 500,
    snapSpeed: 100,

    // You can check other configuration on
    https://chessboardjs.com/examples#1000
};

board = ChessBoard('board', config);