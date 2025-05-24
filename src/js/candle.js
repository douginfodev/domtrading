//Candle - Constructor
function Candle(positionX, positionY, width, height, wireframe) {

  //CANDLE PROPERTIES
  this.positionX = positionX,
    this.positionY = positionY,
    this.height = 0,
    this.width = width,
    this.color = 'yellow',
    this.strokeColor = 'yellow',
    this.lineWidth = 6,
    this.wireframe = wireframe,
    this.visible = true,
    this.Quantity = 0; //pixels

  //Position Draw
  this.startPositionX = 600;
  this.startPositionY = 400;

  //Price
  this.startPrice = 400;
  this.HighPrice = 400;
  this.LowPrice = 400;


  //STICK PROPERTIES
  this.stickWidth = this.lineWidth,
    this.stickHeight = 350;
  this.stickPositionX = (this.positionX + (this.width / 2));
  this.stickPositionHighY = this.positionY;
  this.stickPositionLowY = 400;
  this.initialStickLineLow = 0;
  this.endStickLineLow = 0;
};

//Change Color Method
Candle.prototype.stickAction = function (actualPrice) {
  if (actualPrice < this.startPrice) {
    priceActionDirection = 'UP';

    if (actualPrice < this.startPrice)
      priceActionDirection = 'DOWN';

  }
};


//Change Color Method
Candle.prototype.changeColor = function (direction) {
  let priceDirection = direction

  switch (priceDirection) {
    case 'UP':
      this.color = 'lime',  //NAME COLOR
        this.strokeColor = 'lime'
      break;
    case 'DOWN':
      this.color = 'red',  //NAME COLOR
        this.strokeColor = 'red'
      break;
    case 'INITIAL':
      this.color = 'white',  //NAME COLOR
        this.strokeColor = 'white'
      break;
    default:
      this.color = 'yellow',  //NAME COLOR
        this.strokeColor = 'yellow'
  }

};

//Draw Method
Candle.prototype.draw = function (canvas) {

  //DRAW RECTANGLE - CANVAS
  if (this.visible == true) {
    if (this.wireframe == false) {
      canvas.fillStyle = this.color;
      canvas.fillRect(this.positionX, this.positionY, this.width, this.height);
    } else {
      //   canvas.strokeStyle = this.strokeColor;
      //   canvas.lineWidth = this.lineWidth;
      //   canvas.strokeRect(this.positionX, this.positionY, this.width, this.height);
      canvas.strokeStyle = this.strokeColor;
      canvas.lineWidth = this.lineWidth;
      canvas.strokeRect(this.positionX, this.positionY, this.width, this.height);
    }
  }

};

//Stick Draw Method
Candle.prototype.stick = function (canvas) {

  //COLOR / LINE STICK  
  canvas.strokeStyle = this.strokeColor;
  canvas.lineWidth = this.stickWidth;

  //DRAW STICK - UP/HIGH
  if (this.visible == true) {
    canvas.beginPath();
    canvas.moveTo(this.stickPositionX, this.stickPositionHighY);     //INITIAL VALUE LINE
    canvas.lineTo(this.stickPositionX, this.stickPositionHighY - this.stickHeight);     //END VALUE LINE
    canvas.stroke();

    //DRAW STICK - DOWN/LOW
    canvas.beginPath();
    canvas.moveTo(this.stickPositionX, this.stickPositionLowY);                      //INITIAL LINE POINT
    canvas.lineTo(this.stickPositionX, this.stickPositionLowY + this.stickHeight);     //END LINE POINT
    canvas.stroke();
  }
};

//Stick Draw Method
Candle.prototype.stickMove = function (canvas) {

  //COLOR / LINE STICK  
  canvas.strokeStyle = this.strokeColor;
  canvas.lineWidth = this.stickWidth;


  if (this.visible == true) {

    //DRAW STICK - UP/HIGH
    // canvas.beginPath();
    // canvas.moveTo(this.stickPositionX, this.startPositionY);     //INITIAL VALUE LINE
    // canvas.lineTo(this.stickPositionX, this.HighPrice - this.Quantity);     //END VALUE LINE
    // canvas.stroke();

    //DRAW STICK - DOWN/LOW
    canvas.beginPath();
    canvas.moveTo(this.stickPositionX, this.startPositionY + this.height);  //this.startPositionY                    //INITIAL LINE POINT
    canvas.lineTo(this.stickPositionX, this.stickPositionLowY + this.Quantity);     //this.stickPositionLowY)END LINE POINT
    canvas.stroke();
  }
};

//VISIBLE
Candle.prototype.Visible = function (isvisible) {
  this.visible = isvisible;
};

//Price Move Down
Candle.prototype.priceMoveDown = function (actualprice, quantity) {
  
  if (actualprice < this.LowPrice) {
    this.stickPositionLowY += this.Quantity;
    this.Quantity = quantity;
    this.height += this.Quantity;
    this.LowPrice = actualprice;
  } else if (actualprice <= this.startPrice)
    this.height -= this.Quantity;
};