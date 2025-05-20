const CanvasImage = function(width,height,positionX,positionY){
    this.width   = width;
    this.height  = height;
    this.originX = positionX;
    this.originY = positionY;
};

CanvasImage.prototype.draw = function(canvas,image){
    canvas.drawImage(image,this.originX,this.originY,this.width,this.height);
};