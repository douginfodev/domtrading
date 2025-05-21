(function () {
   const IMAGEPATH = '../assets/images/';
   let context;  
   let canvas; 

   //GRID
   const GRIDSPACINGROW    = 100;
   const GRIDSPACINGCOLUMN = 100;
   const GRIDLINEWIDTH = 1;
   const GRIDCOLOR     = 'white';
   let   gridWidht     =  1900;
   let   gridHeight    =  1080;  
   let   gride = new Grid(GRIDSPACINGROW,GRIDSPACINGCOLUMN,gridWidht,gridHeight,GRIDCOLOR,GRIDLINEWIDTH);

   //LOADING SIDEIMAGE PROF DOM
   let sideImage      = new Image();
       sideImage.src  = IMAGEPATH+'exemplo1.png';
   let sideImageBrand = new CanvasImage(sideImage.width,sideImage.height,0,0);

  //TEXT
   const TEXTCOLOR     = 'white';
   const WIREFRAMETEXT = true;
   let textTitle = new CanvasText(550,80,'EXEMPLO 1',60,!WIREFRAMETEXT);
   let textTitleWireframe = new CanvasText(300,80,'DOM TRADING 2025',80,WIREFRAMETEXT);

   //CANDLE
   const CANDLEWIDTH  = 100; //pixels
   const CANDLEHEIGHT = 400; //pixels
   let wireframe      = false;
   let candle1        = new Candle(500,200,CANDLEWIDTH,CANDLEHEIGHT,wireframe); 
   let candleStickWireframe1 = new Candle(800,200,CANDLEWIDTH,CANDLEHEIGHT,!wireframe); 
 
    window.onload = init();   
   
    function init() {
        context = document.getElementById('mcanvas');

        if (context !== null) {
            canvas = context.getContext('2d');
            start();
        } else
            alert('Element Canvas not Found');
    };

    function start() {
       let canvasScreenDraw = canvasDisplay();
       gride.setGridSize(canvasScreenDraw[0],canvasScreenDraw[1]); 
       sideImageBrand.draw(canvas,sideImage); 

       loop();
    };

    function update() {
        draw();
    }

    function draw() {
        canvas.clearRect(0,0,1920,1080);
        gride.draw(canvas);
        textTitle.changeColor(TEXTCOLOR,'white');
        textTitle.draw(canvas);
        sideImageBrand.draw(canvas,sideImage);
     
      
        //CANDLE 1 - SÓLIDO
        candle1.changeColor('UP');
        candle1.draw(canvas);

        //CANDLE STICK 1 - WIREFRAME
        candleStickWireframe1.draw(canvas);
        candleStickWireframe1.stick(canvas);
    }

    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, context);
    }

    //SCREEN SIZE
    function screenSize(){
      let  screenWidth   = context.offsetWidth;
      let  screenHeight  = context.offsetHeight;
      return [screenWidth,screenHeight]
    }

    //CANVAS DISPLAY SIZE
    function canvasDisplay(){
      let  canvasResolutionWidth   = context.width;
      let  canvasResolutionHeight  = context.height;
      return [canvasResolutionWidth,canvasResolutionHeight];
   }
}());