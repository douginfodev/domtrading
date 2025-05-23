(function () {
   const IMAGEPATH = '../assets/images/';
   let context;  
   let canvas; 

   //GRID
   const GRIDSPACINGROW    = 100;
   const GRIDSPACINGCOLUMN = 50;
   const GRIDLINEWIDTH = 1;
   const GRIDCOLOR     = 'white';
   let   gridWidht     =  1900;
   let   gridHeight    =  1080;  
   let   gride = new Grid(GRIDSPACINGROW,GRIDSPACINGCOLUMN,gridWidht,gridHeight,GRIDCOLOR,GRIDLINEWIDTH);

   //LOADING SIDEIMAGE PROF DOM
   let sideImage      = new Image();
       sideImage.src  = IMAGEPATH+'exemplo5.png';
   let sideImageBrand = new CanvasImage(sideImage.width,sideImage.height,0,0);

  //TEXT
   const TEXTCOLOR     = 'white';
   const WIREFRAMETEXT = true;
   let textTitle = new CanvasText(550,80,'EXEMPLO 5',60,!WIREFRAMETEXT);
   let textTitleWireframe = new CanvasText(300,80,'DOM TRADING 2025',80,WIREFRAMETEXT);

   //CANDLE
   const CANDLEWIDTH  = 100; //pixels
   const CANDLEHEIGHT = 400; //pixels 100 STICK HIGH / 100 STICK LOW
   const ISVISIBLE    = true;
   let wireframe      = false;

   //CANDLESTICK HIGH / LOW
   let candleHigh     = new Candle(500,200,CANDLEWIDTH,CANDLEHEIGHT,wireframe); 
   let candleLow      = new Candle(800,200,CANDLEWIDTH,CANDLEHEIGHT,wireframe); 
 
   //CANDLESTICK HAMMER - MARTELO
   let candlestickHammer      = new Candle(500,150,CANDLEWIDTH,150,wireframe); 
   let candlestickHammerWire  = new Candle(800,150,CANDLEWIDTH,150,!wireframe); 
 
   //CANDLESTICK SPINNING TOP - PIÃO
   let candlestickSpinningTopHigh  = new Candle(500,350,CANDLEWIDTH,100,wireframe); 
   let candlestickSpinningTopLow   = new Candle(800,350,CANDLEWIDTH,100,wireframe); 
 
   //CANDLESTICK STAR - ESTRELA CADENTE
   let candlestickStarLow      = new Candle(500,500,CANDLEWIDTH,150,wireframe); 
   let candlestickStarLowWire  = new Candle(800,500,CANDLEWIDTH,150,!wireframe); 
 
   //CANDLESTICK DOJI 
   let candlestickDojiHigh   = new Candle(500,200,CANDLEWIDTH,25,wireframe); 
   let candlestickDojiLow    = new Candle(800,550,CANDLEWIDTH,25,!wireframe); 
 

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

        //EX 5 - CANDLESTICK DOJI - SÓLIDO
        candlestickDojiHigh.Visible(ISVISIBLE);
        candlestickDojiHigh.stick(canvas);
        candlestickDojiHigh.draw(canvas);
        candlestickDojiHigh.changeColor('DEFAULT');                      

        //EX 5 - CANDLESTICK DOJI (ESTRELA CADENTE) - WIREFRAME
        candlestickDojiLow.Visible(ISVISIBLE);
        candlestickDojiLow.draw(canvas);
        candlestickDojiLow.stick(canvas);
        candlestickDojiLow.changeColor('DEFAULT'); 

        //EX 4 - CANDLESTICK STAR (ESTRELA CADENTE) - SÓLIDO
        candlestickStarLow.Visible(!ISVISIBLE);
        candlestickStarLow.stick(canvas);
        candlestickStarLow.draw(canvas);
        candlestickStarLow.changeColor('DOWN');                      

        //EX 4 - CANDLESTICK STAR (ESTRELA CADENTE) - WIREFRAME
        candlestickStarLowWire .Visible(!ISVISIBLE);
        candlestickStarLowWire .draw(canvas);
        candlestickStarLowWire .stick(canvas);
        candlestickStarLowWire .changeColor('DOWN');      

        //EX 3 - CANDLESTICK SPINNING TOP(PIÃO) - SÓLIDO
        candlestickSpinningTopHigh.Visible(!ISVISIBLE);
        candlestickSpinningTopHigh.stick(canvas);
        candlestickSpinningTopHigh.draw(canvas);
        candlestickSpinningTopHigh.changeColor('UP');                      

        //EX 3 - CANDLESTICK SPINNIG TOP(PIÃO) - WIREFRAME
        candlestickSpinningTopLow.Visible(!ISVISIBLE);
        candlestickSpinningTopLow.draw(canvas);
        candlestickSpinningTopLow.stick(canvas);
        candlestickSpinningTopLow.changeColor('DOWN');
      
        //EX 2 - CANDLESTICK HAMMER(MARTELO) - SÓLIDO
        candlestickHammer.Visible(!ISVISIBLE);
        candlestickHammer.stick(canvas);
        candlestickHammer.draw(canvas);
        candlestickHammer.changeColor('UP');                      

        //EX 2 - CANDLESTICK HAMMER(MARTELO) - WIREFRAME
        candlestickHammerWire.Visible(!ISVISIBLE);
        candlestickHammerWire.draw(canvas);
        candlestickHammerWire.stick(canvas);
        candlestickHammerWire.changeColor('UP');

        //EX 1 -CANDLE HIGH - SÓLIDO
        candleHigh.Visible(!ISVISIBLE);
        candleHigh.stick(canvas);
        candleHigh.draw(canvas);
        candleHigh.changeColor('UP');                      

        //EX 2 - CANDLESTICK LOW - WIREFRAME
        candleLow.Visible(!ISVISIBLE);
        candleLow.draw(canvas);
        candleLow.stick(canvas);
        candleLow.changeColor('DOWN');
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