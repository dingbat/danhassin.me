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

function squares(canvas,num)
{
  var context = canvas.getContext("2d");
  var i;
  for (i = 0; i < num; i++) {
    var topLeft = randPoint(canvas,100);
    var width = Math.random()*300;
    var height = Math.random()*300;

    context.strokeStyle = "rgb("+randRGB(1)+","+randRGB(1)+","+randRGB(1)+")";
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
      squares(canvas,100);
    }
  }

  var refreshRate = {
    static: 6,
    waves: 6,
    squares: 5,
  }[playing];

  step = (step + 1) % refreshRate;

  requestAnimationFrame(animloop.bind(this, id, playing));
}

export const start = function (id, playing) {
  animloop(id, playing);
}
