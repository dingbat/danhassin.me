var step = 0;

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(callback) {
    return setTimeout(callback, 1000/60.0);
  };

function clear(canvas)
{
  var context = canvas.getContext("2d");
  context.fillStyle = "rgb(0,0,0)";
  context.fillRect(0,0,canvas.width,canvas.height);
}

function randRGB(darkness)
{
  return Math.floor(Math.random()*255/darkness);
}

function randPoint(canvas,extra)
{
  return [Math.random()*(canvas.width+extra*2)-extra, Math.random()*(canvas.height+extra*2)-extra];
}

function textile(canvas)
{
  var context = canvas.getContext("2d");
  var lines = function(start, width, slope, offset) {
    offset = offset || 0;
    var i;
    for (i = -canvas.height; i < canvas.height*2; i += width) {
      var d = Math.random()*1 + 1;
      context.strokeStyle = "rgb("+randRGB(d)+","+randRGB(d)+","+randRGB(d)+")";
      context.beginPath();

      context.moveTo(start+offset,i);
      context.lineTo(canvas.width - start + offset, i+canvas.height*slope);

      context.stroke();
    }
  };

  var widthA = Math.random()*5 + 2;
  var widthB = Math.random()*5 + 2;

  var slopeA = Math.min(1, Math.random() + 0.5);
  var slopeB = Math.min(1, Math.random() + 0.5);

  if (widthA > widthB) {
    lines(0, widthA, slopeA);
    lines(canvas.width, widthB, slopeB);
  } else {
    lines(canvas.width, widthA, slopeA);
    lines(0, widthB, slopeB);
  }

  var i;
  for (i = 0; i < Math.random()*3 - 1; i++) {
    var widthC = Math.random()*6 + 2;
    var slopeC = Math.min(1, Math.random() + 0.5);

    var offset = Math.random()*canvas.width*2 - canvas.width;
    var middle = Math.random()*canvas.width/2;
    var sign = Math.random() < 0.5 ? -1 : 1;
    lines(middle, widthC, sign * slopeC, offset);
  }
}

function squares(canvas)
{
  var context = canvas.getContext("2d");
  var i;
  for (i = 0; i < 1000; i++) {
    var center = randPoint(canvas,50);
    var width = Math.random()*300;
    var height = Math.random()*300;
    var topLeft = [center[0]-width/2, center[1]-height/2];

    var d = Math.random() + Math.random() + Math.random();
    context.strokeStyle = "rgb("+randRGB(d)+","+randRGB(d)+","+randRGB(d)+")";
    context.beginPath();

    context.moveTo(topLeft[0],topLeft[1]);
    context.lineTo(topLeft[0] + width,topLeft[1]);
    context.lineTo(topLeft[0] + width,topLeft[1] + height);
    context.lineTo(topLeft[0],topLeft[1] + height);
    context.lineTo(topLeft[0],topLeft[1]);

    context.stroke();
  }
}

function waves(canvas,num)
{
  var context = canvas.getContext("2d");
  var distance = 30;
  var i;
  for (i = 0; i < num; i++) {
    var y = distance*i;
    context.strokeStyle = "rgb("+randRGB(2)+","+randRGB(2)+","+randRGB(2)+")";
    context.beginPath();
    context.moveTo(0,y);

    var left = Math.random()*30;
    var waveW = Math.random()*30 + 130;
    var x;
    for (x = 0; x < canvas.width/3; x++) {
      context.lineTo(x*3, y + Math.sin((x-left)*waveW*0.1)*50);
    }

    context.stroke();
  }
}

function lines(canvas,num,darkness,extra)
{
  var context = canvas.getContext("2d");
  var i;
  for (i = 0; i < num; i++) {
    var pt1 = randPoint(canvas,extra);
    var pt2 = randPoint(canvas,extra);

    context.strokeStyle = "rgb("+randRGB(darkness)+","+randRGB(darkness)+","+randRGB(darkness)+")";
    context.beginPath();
    context.moveTo(pt1[0],pt1[1]);
    context.lineTo(pt2[0],pt2[1]);
    context.stroke();
  }
}

function animloop(id, playing)
{
  var canvas = document.getElementById(id);
  if (!canvas) {
    return;
  }

  if (step == 0) {
    clear(canvas);

    if (playing === 'static') {
      lines(canvas,16,1,100);
    }
    else if (playing === 'waves') {
      waves(canvas,18);
    }
    else if (playing === 'squares') {
      squares(canvas);
    }
    else if (playing === 'textile') {
      textile(canvas);
    }
  }

  step = (step + 1) % 6;

  requestAnimationFrame(animloop.bind(this, id, playing));
}

export const start = function (id, playing) {
  animloop(id, playing);
}
