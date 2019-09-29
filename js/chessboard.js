window.onload = function () {
    newGame()
};


let newGame = document.getElementsByClassName('button');
newGame = function () {
    init();
};

function init() {
    //初始化象棋位置
    let chessPieces = document.getElementsByClassName('chessPieces');
    let greenPieces = document.getElementsByClassName('green');
    let redPieces = document.getElementsByClassName('red');
    let piecesPosition = [
        //1
        {l:10,t:14},
        {l:70,t:14},
        {l:130,t:14},
        {l:190,t:14},
        {l:250,t:14},
        {l:310,t:14},
        {l:370,t:14},
        {l:430,t:14},
        {l:490,t:14},
        //2
        {l:10,t:74},
        {l:70,t:74},
        {l:130,t:74},
        {l:190,t:74},
        {l:250,t:74},
        {l:310,t:74},
        {l:370,t:74},
        {l:430,t:74},
        {l:490,t:74},
        //3
        {l:10,t:134},
        {l:70,t:134},
        {l:130,t:134},
        {l:190,t:134},
        {l:250,t:134},
        {l:310,t:134},
        {l:370,t:134},
        {l:430,t:134},
        {l:490,t:134},
        //4
        {l:10,t:194},
        {l:70,t:194},
        {l:130,t:194},
        {l:190,t:194},
        {l:250,t:194},
        {l:310,t:194},
        {l:370,t:194},
        {l:430,t:194},
        {l:490,t:194},
        //5
        {l:10,t:254},
        {l:70,t:254},
        {l:130,t:254},
        {l:190,t:254},
        {l:250,t:254},
        {l:310,t:254},
        {l:370,t:254},
        {l:430,t:254},
        {l:490,t:254},
        //6
        {l:10,t:314},
        {l:70,t:314},
        {l:130,t:314},
        {l:190,t:314},
        {l:250,t:314},
        {l:310,t:314},
        {l:370,t:314},
        {l:430,t:314},
        {l:490,t:314},
        //7
        {l:10,t:374},
        {l:70,t:374},
        {l:130,t:374},
        {l:190,t:374},
        {l:250,t:374},
        {l:310,t:374},
        {l:370,t:374},
        {l:430,t:374},
        {l:490,t:374},
        //8
        {l:10,t:434},
        {l:70,t:434},
        {l:130,t:434},
        {l:190,t:434},
        {l:250,t:434},
        {l:310,t:434},
        {l:370,t:434},
        {l:430,t:434},
        {l:490,t:434},
        //9
        {l:10,t:494},
        {l:70,t:494},
        {l:130,t:494},
        {l:190,t:494},
        {l:250,t:494},
        {l:310,t:494},
        {l:370,t:494},
        {l:430,t:494},
        {l:490,t:494},
        //10
        {l:10,t:554},
        {l:70,t:554},
        {l:130,t:554},
        {l:190,t:554},
        {l:250,t:554},
        {l:310,t:554},
        {l:370,t:554},
        {l:430,t:554},
        {l:490,t:554}
    ];
    let initPiecesPosition = [
        //绿色车马象士将位置
        {l:10,t:14,x:-188,y:-121},
        {l:70,t:14,x:-1,y:-187},
        {l:130,t:14,x:-128,y:-186},
        {l:190,t:14,x:-2,y:-62},
        {l:250,t:14,x:-128,y:-122},
        {l:310,t:14,x:-2,y:-62},
        {l:370,t:14,x:-127,y:-186},
        {l:430,t:14,x:0,y:-187},
        {l:490,t:14,x:-188,y:-121},

        //绿色炮位置
        {l:70,t:134,x:-7,y:0},
        {l:430,t:134,x:-7,y:0},

        //绿色兵位置
        {l:10,t:194,x:-4,y:-123},
        {l:130,t:194,x:-4,y:-123},
        {l:250,t:194,x:-4,y:-123},
        {l:370,t:194,x:-4,y:-123},
        {l:490,t:194,x:-4,y:-123},

        //红色车马象士帅位置
        {l:10,t:554,x:-6,y:-7},
        {l:70,t:554,x:-129,y:-188},
        {l:130,t:554,x:-192,y:-192},
        {l:190,t:554,x:-7,y:-68},
        {l:250,t:554,x:-65,y:-192},
        {l:310,t:554,x:-7,y:-68},
        {l:370,t:554,x:-192,y:-192},
        {l:430,t:554,x:-129,y:-188},
        {l:490,t:554,x:-6,y:-7},

        //红色炮位置
        {l:70,t:434,x:-68,y:-4},
        {l:430,t:434,x:-68,y:-4},

        //红色兵位置
        {l:10,t:374,x:-0,y:-130},
        {l:130,t:374,x:-0,y:-130},
        {l:250,t:374,x:-0,y:-130},
        {l:370,t:374,x:-0,y:-130},
        {l:490,t:374,x:-0,y:-130}
    ];

    for(let i=0;i<initPiecesPosition.length;i++){

        console.log(chessPieces[i]);
        chessPieces[i].style.width = 60 + 'px';
        chessPieces[i].style.height = 60 + 'px';
        chessPieces[i].style.position = 'absolute';
        chessPieces[i].style.left = initPiecesPosition[i].l + 'px';
        chessPieces[i].style.top = initPiecesPosition[i].t + 'px';
        chessPieces[i].style.backgroundPosition = initPiecesPosition[i].x + 'px' + ' ' + initPiecesPosition[i].y + 'px';
    }
}