var grid = [
    [2048,1024,512,256],
    [128,64,32,16],
    [8,4,2,0],
    [0,0,0,0]
    ];

var anotherGrid = [
    [32,128,0,2],
    [2,16,8,16],
    [4,4,2,0],
    [0,0,4,4]
    ];

var drawNum = function(gridX, gridY, num) {
    if (num !== 0) {
        fill(0, 0, 0);
    textSize(40);
    text(num, gridX, gridY);
    }
};

var drawRow = function(gridRow, aGrid) {
    var gridNum = 0;
    var pos = 20;
    while (gridNum <=3) {
        drawNum(pos, gridRow * 100 + 65, aGrid[gridRow][gridNum]);
        gridNum ++;
        pos += 100;
    }
};

var drawGrid = function (aGrid) {
    var gridRow = 0;
    while (gridRow <= 3) {
    drawRow(gridRow, aGrid);
    gridRow ++;
    }  
};
var draw = function() {
    var x = NaN;
    var y = NaN;
    if (keyCode === RIGHT) {
        x = 300;
        y = 5;
    }
    if ( keyCode === LEFT) {
        x = 5;
        y = 5;
    }
    if (keyCode === UP) {
        y = 5;
        x = 300;
    }
    if ( keyCode === DOWN) {
        y = 300;
        x = 5;
    }
    rect (x, y, 90, 90);
};

drawGrid(anotherGrid);

fill(255, 0, 0);
textSize(50);
var array = [0, 2, 2, 64];
var printArray = function (array) {
    var arrayNum = 0;
    var pos = 5;
    while(arrayNum <= 3) {
        text(array[arrayNum], pos, 50);
        arrayNum ++;
        pos += 100;
    }
};
var addArray = function (array) {
    var added = [];

    return(array);
};

var addedArray = addArray(array);

printArray(addedArray);
/**if (keyCode === LEFT) {
    
}
**/
var Tile = function(num) {
    this.x = 0;
    this.num = num;
    this.y = 0;
    this.size = 90;
    this.margin = 5;
    this.textSize = 75;
    this.paint = function() {
        background(255, 255, 255);
        if (keyCode === RIGHT) {
            this.x = 305;
        }
        if ( keyCode === LEFT) {
            this.x = 5;
        }
        if (keyCode === UP) {
            this.y = 5;
        }
        if ( keyCode === DOWN) {
            this.y = 305;
        }
    
        fill(0, 0, 0);
        textSize(this.textSize);
        text(this.num, this.x + 20, this.y + 80);
        noFill();
        rect (this.x, this.y, 90, 90);
    };
    var setNum = function (num) {
        this.num = num;
    };
    
};

var myTile = new Tile(2);
//myTile.setNum(2048);
var draw = function() {
    myTile.paint();
};

