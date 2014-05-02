var grid = [
    [2048,1024,512,256],
    [128,64,32,16],
    [8,4,2,0],
    [0,0,0,0]
    ];

var drawTile = function(num, gridY, gridX) {
  //draw one grid tile here
  var margin = 5;
  var tileSize = 90;
  
  var tileX = margin + (gridX * margin * 2) + (gridX * tileSize);
  var tileY = margin + (gridY * margin * 2) + (gridY * tileSize);
  
  rect(tileX, tileY, tileSize, tileSize);

  fill(0, 0, 0);
  textSize(25);
  if (0 !== num) {
    text(num, tileX + 25, tileY+ 75);
  }
  noFill();
};

for (var gridY=0; gridY<4; gridY++) {
    for (var gridX=0; gridX<4; gridX++) {
        drawTile(grid[gridY][gridX], gridY, gridX);
    }
}
/*
drawTile(grid[0][0], 0, 0);
drawTile(grid[0][1], 0, 1);
drawTile(grid[0][2], 0, 2);
drawTile(grid[0][3], 0, 3);

drawTile(grid[1][0], 1, 0);
drawTile(grid[1][1], 1, 1);
drawTile(grid[1][2], 1, 2);
drawTile(grid[1][3], 1, 3);
*/


//2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048!

/*var two = 4;
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
*/
