//Candle - Constructor
function Candle(positionX, positionY, width, height,wireframe) {
   
    //CANDLE PROPERTIES
    this.positionX = positionX,
    this.positionY = positionY,
    this.height    = height,
    this.width     = width,
    this.color       = 'yellow',  //NAME COLOR
    this.strokeColor = 'yellow',
    this.lineWidth   = 6,
    this.wireframe   = wireframe,
    //STICK PROPERTIES
    this.stickWidth     = this.lineWidth,
    this.stickHeight    = 100;   
    this.stickPositionX = (this.positionX + (this.width / 2));
    this.stickPositionHighY = this.positionY;
    this.stickPositionLowY  = this.positionY + this.height;        
};

//Change Color Method
Candle.prototype.changeColor = function (direction) {
 let priceDirection = direction
 
  switch (priceDirection) {
  case 'UP':
    this.color       = 'lime',  //NAME COLOR
    this.strokeColor = 'lime'
    break;
  case 'DOWN':
    this.color       = 'red',  //NAME COLOR
    this.strokeColor = 'red'
    break;
  default:
    this.color       = 'yellow',  //NAME COLOR
    this.strokeColor = '#FFFFFF'
 } 

};

//Draw Method
Candle.prototype.draw = function (canvas) {
  
  //DRAW RECTANGLE - CANVAS
  if(this.wireframe == false){
    canvas.fillStyle = this.color;
    canvas.fillRect(this.positionX,this.positionY,this.width,this.height);
  }else{
    canvas.strokeStyle = this.strokeColor; 
    canvas.lineWidth   = this.lineWidth; 
    canvas.strokeRect(this.positionX,this.positionY,this.width,this.height); 
  }
  //this.changeColor('UP');
};

//Stick Draw Method
Candle.prototype.stick = function (canvas) {
  
  //COLOR / LINE STICK  
  canvas.strokeStyle = this.strokeColor; 
  canvas.lineWidth   = this.stickWidth;
  
  //DRAW STICK - UP/HIGH
  canvas.beginPath();
  canvas.moveTo(this.stickPositionX,this.stickPositionHighY);     //INITIAL VALUE LINE
  canvas.lineTo(this.stickPositionX,this.stickPositionHighY-this.stickHeight);     //END VALUE LINE
  canvas.stroke();

  //DRAW STICK - DOWN/LOW
  canvas.beginPath();
  canvas.moveTo(this.stickPositionX,this.stickPositionLowY);                      //INITIAL LINE POINT
  canvas.lineTo(this.stickPositionX,this.stickPositionLowY+this.stickHeight);     //END LINE POINT
  canvas.stroke();
};