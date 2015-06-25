function Circle(){
	createjs.Shape.call(this);

	this.setCircleType=function(type){
		this._circleType=type;
		var colorA={1:'#ccc',2:'#f60',3:'#f00'};
		this.setColor(colorA[type]);
	}

	this.setColor=function(colorStr){
		this.graphics.beginFill(colorStr);
		this.graphics.drawCircle(0,0,25);
		this.graphics.endFill();
	}

	this.getColor=function(colorStr){
		return this._circleType;
	}

	this.setCircleType(1);
}

Circle.prototype=new createjs.Shape();