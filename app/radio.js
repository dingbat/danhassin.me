var step = 0;

var playing, canvas, context;

var requestAnimationFrame =  
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  function(callback) {
    return setTimeout(callback, 1000/60.0);
  };

function clear()
{
  context.fillStyle = "rgb(0,0,0)";
  context.fillRect(0,0,canvas.width,canvas.height);
}

function randRGB(darkness)
{
  return Math.floor(Math.random()*255/darkness);
}

function randPoint(extra)
{
  return [Math.random()*(canvas.width+extra*2)-extra, Math.random()*(canvas.height+extra*2)-extra]; 
}

function waves(num)
{
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

function lines(num,darkness,extra)
{   
  var i;
  for (i = 0; i < num; i++) {
    var pt1 = randPoint(extra);
    var pt2 = randPoint(extra);

    context.strokeStyle = "rgb("+randRGB(darkness)+","+randRGB(darkness)+","+randRGB(darkness)+")";
    context.beginPath();
    context.moveTo(pt1[0],pt1[1]);
    context.lineTo(pt2[0],pt2[1]);
    context.stroke();
  }
}

function animloop()
{
  if (step == 0) {
    clear();
  
    if (!playing) {
      lines(16,1,100);
    }
    else {
      waves(18);
    }
  }

  step = (step + 1) % 5;
  requestAnimationFrame(animloop);
}

export default function() {
  canvas = document.getElementById("radio-canvas");
  context = canvas.getContext("2d");
  playing = true;
  canvas.addEventListener("mouseover", function () {
    playing = false;
  });
  canvas.addEventListener("mouseout", function () {
    playing = true;
  });

  animloop();
}