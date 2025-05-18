//Grid Constructor
function Grid(gridspacing, width, height, color, linewidth) {
    this.positionX = 0,
    this.PositionY = 0,
    this.width  = width,
    this.height = height,
    this.color  = color,
    this.lineWidth   = linewidth,
    this.linespacing = gridspacing
};

//Draw Method
Grid.prototype.draw = function (canvas) {
  let rowLine   = this.linespacing;
  let columLine = this.linespacing;
  let i = 0;
  let j = 0;

  for (j = 1; j <= 17; j++) {
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

    columLine = columLine + this.linespacing;
    rowLine = rowLine + this.linespacing;
  }

  //Screen Center
  //HORIZONTAL
  canvas.strokeStyle = 'yellow';
  canvas.lineWidth = 3;
  canvas.beginPath();
  canvas.moveTo(700,0);
  canvas.lineTo(700,1000);
  canvas.stroke();

  //VERTICAL
  canvas.beginPath();
  canvas.moveTo(0, 400);
  canvas.lineTo(1420, 400);
  canvas.stroke();
};
