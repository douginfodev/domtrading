//Grid Constructor
function Grid(gridspacingrow,gridspacingcolumn, width, height, color, linewidth) {
    this.positionX = 0,
    this.PositionY = 0,
    this.width  = width,
    this.height = height,
    this.color  = color,
    this.lineWidth   = linewidth,
    this.linespacingRow = gridspacingrow,
    this.linespacingColumn = gridspacingcolumn
};

Grid.prototype.setGridSize = function (width,height) {
  this.width  = width;
  this.height = height; 
};

//Draw Method
Grid.prototype.draw = function (canvas) {
  let rowLine   = this.linespacingRow;
  let columLine = this.linespacingColumn;
  let i = 0;
  let j = 0;
  let screenCenterX = (Math.ceil(this.width / 2));
  let screenCenterY = (Math.ceil(this.height / 2));
  let tiled = Math.ceil(this.width / columLine);

  for (j = 1; j <= tiled; j++) {
    canvas.strokeStyle = this.color;
    canvas.lineWidth = this.lineWidth;

    canvas.beginPath();
    canvas.moveTo(rowLine, 0);
    canvas.lineTo(rowLine, this.height);
    canvas.stroke();

    canvas.beginPath();
    canvas.moveTo(0, columLine);
    canvas.lineTo(this.width, columLine);
    canvas.stroke();

    columLine = columLine + this.linespacingColumn;
    rowLine = rowLine + this.linespacingRow;
  }

  //Screen Center
  //VERTICAL
  canvas.strokeStyle = 'yellow';
  canvas.lineWidth = 3;
  canvas.beginPath();
  canvas.moveTo(screenCenterX,0);
  canvas.lineTo(screenCenterX,this.height);
  canvas.stroke();

  //HORIZONTAL
  canvas.beginPath();
  canvas.moveTo(0,screenCenterY);
  canvas.lineTo(this.width,screenCenterY);
  canvas.stroke();
};
