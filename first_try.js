//2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048!
var two = 4;
var four = 4;
var squareSize = 90;
var squareMargin = 5 ;
var squareY = squareMargin;
while (squareY < 400) {
    var squareX = squareMargin;
    while(squareX < 400) {
        rect(squareX, squareY, squareSize, squareSize);
        squareX += squareSize + 2*squareMargin;
    }
    squareY += squareSize + 2*squareMargin;
}
/*
-tell computer what to do
-get #s on screen
-for arrays are the rows
-
*/
