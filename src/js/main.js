(function () {
   const IMAGEPATH = '../assets/images/';
   let context;  
   let canvas; 

   //GRID
   const GRIDSPACING   = 100;
   const GRIDLINEWIDTH = 1;
   const GRIDCOLOR     = 'white';
   let gride = new Grid(GRIDSPACING,1900,800,GRIDCOLOR,GRIDLINEWIDTH);

   //LOADING SIDEIMAGE PROF DOM
   let sideImage = new Image();
       sideImage.src = IMAGEPATH+'barracanvasgreen.png';
   let sideImageBrand = new CanvasImage(sideImage.width,sideImage.height,0,0);


  //TEXT
   const TEXTCOLOR = 'lime';
   const WIREFRAMETEXT = true;
   let textTitle = new CanvasText(300,80,'DOM TRADING 2025',80,!WIREFRAMETEXT);
   let textTitleWireframe = new CanvasText(300,80,'DOM TRADING 2025',80,WIREFRAMETEXT);


   //CANDLE
   const CANDLEWIDTH  = 100; //pixels
   const CANDLEHEIGHT = 400; //pixels
   let wireframe = false;
   let candle1      = new Candle(300,200,CANDLEWIDTH,CANDLEHEIGHT,wireframe); 
   let candle2      = new Candle(800,200,CANDLEWIDTH,CANDLEHEIGHT,wireframe); 
   let candleStickWireframe1 = new Candle(500,200,CANDLEWIDTH,CANDLEHEIGHT,!wireframe); 
   let candleStickWireframe2 = new Candle(1000,200,CANDLEWIDTH,CANDLEHEIGHT,!wireframe); 
 

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
       sideImageBrand.draw(canvas,sideImage); 

       loop();
    };

   
    function update() {
        draw();
    }

 
    function draw() {
        canvas.clearRect(0,0,1920,1080);
        gride.draw(canvas);
        sideImageBrand.draw(canvas,sideImage);
        textTitle.changeColor(TEXTCOLOR,'white');
        textTitle.draw(canvas);
        textTitleWireframe.draw(canvas);
      
        
        //CANDLE 1 - SÓLIDO
        candle1.changeColor('UP');
        candle1.draw(canvas);

        //CANDLE STICK 1 - WIREFRAME
        candleStickWireframe1.draw(canvas);
        candleStickWireframe1.stick(canvas);

        //CANDLE 2 - SÓLIDO
        candle2.changeColor('DOWN');
        candle2.draw(canvas);
        
        //CANDLE STICK 2 - WIREFRAME
        candleStickWireframe2.draw(canvas);
        candleStickWireframe2.stick(canvas);
    }

  
    function loop() {
        update();
        draw();
        requestAnimationFrame(loop, context);
    }
}());