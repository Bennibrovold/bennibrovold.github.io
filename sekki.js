const sekki = (function(){

  // callback to output errors and attentions
  const _callback = (text) => console.log(text);

  // toolbar - canvas element
  let toolbar = [];

  let i = 0;

  // app - canvas element
  let app = [];

  // current objects of application
  let objects = [{
    "x":100,
    "y":100,
    "radius":20
  }];

// set up the palette
  const setUpTools = () => {
    for (var r = 0, max = 4; r <= max; r++) {
      for (var g = 0; g <= max; g++) {
        for (var b = 0; b <= max; b++) {
          var paletteBlock = document.createElement('div');
          paletteBlock.className = 'button';
          paletteBlock.addEventListener('click', function changeColor(e) {
            app[0].ctx.strokeStyle = e.target.style.backgroundColor;
          });

          paletteBlock.style.backgroundColor = (
            'rgb(' + Math.round(r * 255 / max) + ", "
            + Math.round(g * 255 / max) + ", "
            + Math.round(b * 255 / max) + ")"
          );
          let palite = document.getElementById('palite');
          palite.appendChild(paletteBlock);
        }
      }
    }
  }

// method to realize mouse events
  const mouseEvents = () => {
    app[0].canvas.onmousemove = function(e) {
        if(e.buttons > 0) {
          drawingMouse(e);
        }
    }
  }

// method to realize keyboard events
  const keyboardEvents = () => {
    document.onkeydown = function(e) {
      if(e.keyCode === 67) {
         //sekki.canvasClear(app);
         app[0].ctx.clearRect(0,0, app[0].canvas.width,app[0].canvas.height);
      }
    }
  }
// drawing by mouse when any mouse button is pressed
  const drawingMouse = (e) => {
    ctx = app[0].ctx;
        ctx.lineCap = "round";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(e.offsetX,e.offsetY);
        ctx.lineTo(e.offsetX - e.movementX, e.offsetY - e.movementY);
        ctx.stroke();
        ctx.closePath();
  }

  return {
    // sekki.start() to start an app (toolbar - is canvas for tools,app - is canvas for application)
    start: function(toolbarCanvas,appCanvas) {

      if(sekki.isString(toolbarCanvas) && sekki.isString(appCanvas)) {
      toolbar.push({
        'canvas': document.getElementById(toolbarCanvas),
        'width':  document.getElementById(toolbarCanvas).width,
        'height': document.getElementById(toolbarCanvas).height,
        'ctx':    document.getElementById(toolbarCanvas).getContext("2d")
      });
      app.push({
        'canvas': document.getElementById(appCanvas),
        'width':  document.getElementById(appCanvas).width,
        'height': document.getElementById(appCanvas).height,
        'ctx':    document.getElementById(appCanvas).getContext("2d")
      });
      }
      if(!sekki.isEmpty(toolbar) || !sekki.isEmpty(appCanvas)) {
        return _callback('canvas do not found');
      }
      mouseEvents();
      keyboardEvents();
      setUpTools();
      //setInterval(draw,1000/60);

      return this;
    },
    // method to craete object by console or through html file
    createObject: function(arr) {
      objects.push({
      "id":     objects.length,
      "x":      arr.x ? arr.x : 0,
      "y":      arr.y ? arr.y : 0,
      "type":   arr.type ? arr.type : 'cube',
      "width":  arr.width ? arr.width : 20,
      "height": arr.height ? arr.height : 20,
      "radius": arr.radius ? arr.radius : 10})
      return this;
    }
  }

}());

// helpers for main module (extending)
const helpers = (function(sekki){

  const _callback = (text) => console.log(text);

  sekki.isString = (str) => {
    if(str !== undefined && str !== null && str !== '' && str.length !== 0) {
      if(typeof str === 'string') return true;
        _callback('type of parameters must be string');
        return false;
      }
    _callback('str mustn`t be empty');
    return false;
  }

  sekki.isEmpty = (str) => {
    if(str !== undefined && str !== null && str !== '') {
      return true;
    }
    return false;
  }

  sekki.canvasClear = (app) => {
    app[0].ctx.clearRect(0,0, app[0].canvas.width,app[0].canvas.height);
  }

  return sekki;

}(sekki || {}));
