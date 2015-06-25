var stage=new createjs.Stage('gameView');
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',stage);

var gameView=new createjs.Container();
stage.addChild(gameView);

var num=9;
var circleArr=[];

function addCircles(){
	var centerNum=Math.floor(num/2);
	for(var iY=0;iY<num;iY++){
		circleArr[iY]=[];
		for(var iX=0;iX<num;iX++){
			var c=new Circle();
			gameView.addChild(c);
			circleArr[iY][iX]=c;
			c.x=iX%2?iX*55+25:iX*55;
			c.y=iY*55;
			if(iX==centerNum&&iY==centerNum){
				c.setCircleType(3);
			}
			if(c.getCircleType!=3){
				c.addEventListener('onclick',function(){
					console.log(22)
				})
			}
		}
	}
}

addCircles();