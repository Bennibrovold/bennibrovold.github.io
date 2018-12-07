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

  const setUpTools = () => {

  }

  const draw = () => {
    /* let ctx = app[0].ctx;
    let appSettings = app[0];
    ctx.clearRect(0,0, appSettings.width,appSettings.height);
    for(let i = 0; i < objects.length; i++) {
      ctx.beginPath();
      ctx.arc(objects[i].x, objects[i].y, objects[i].radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
    */
  }
  const mouseEvents = () => {

    if(i === 1) {
      drawingMouse(i);
    }

    document.onmousedown = function(e) {
      i = 1;
    }
    document.onmouseup = function() {
      i = 0;
    }
  }

  const drawingMouse = (i) => {
    ctx = app[0].ctx;
    if(i) {
      document.onmousemove = function(e) {
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY - app[0].canvas.getBoundingClientRect().top, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
      /*  objects.push({
          "x":e.clientX,
          "y":e.clientY - app[0].canvas.getBoundingClientRect().top,
          "radius":20
        }); */
      }
    }
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

      setInterval(mouseEvents,1000/480);

      console.log(toolbar);

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

  return sekki;

}(sekki || {}));
