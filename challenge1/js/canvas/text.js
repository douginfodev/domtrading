const CanvasText = function (positionX, positionY,text,height, wireframe) {
        this.text = text,
        this.originX = positionX,
        this.originY = positionY,
        this.height  = height,
        this.font    = this.height+"px bold Roboto, sans-serif",
        this.color   = 'lime',
        this.strokeColor = 'white',
        this.length  = 0,
        this.textWidth = 2,
        this.wireframe = wireframe
};

//Change Color Method
CanvasText.prototype.changeColor = function (color,strokecolor) {
    this.color       = color,  //NAME COLOR
    this.strokeColor = strokecolor
};

CanvasText.prototype.getLength = function () {
  return this.length;
};

CanvasText.prototype.setLength = function (length) {
  let newLength = length;
  this.Length = newLength;
};

CanvasText.prototype.draw = function (canvas) {
    canvas.lineWidth = this.textWidth;
    canvas.font = this.font;
  
    if (this.wireframe == true) {
        canvas.strokeStyle = this.strokeColor;
        canvas.strokeText(this.text, this.originX, this.originY);
    } else {
        canvas.fillStyle = this.color;
        canvas.fillText(this.text, this.originX, this.originY);
    }

   let lengthText = canvas.measureText(this.text);
   this.setLength(lengthText.width);
};

