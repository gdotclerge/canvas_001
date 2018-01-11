const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  draw();
}

resizeCanvas();

function draw() {


  ctx.fillStyle = 'rgb(216, 255, 121)';
  ctx.fillRect(.1*width, .1*height, .8*width, .5*height);

  ctx.fillStyle = 'rgb(252, 255, 121)';
  ctx.fillRect(.1*width, .6*height, .8*width, .03*height);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
  ctx.beginPath();
    ctx.moveTo(width*.65, height*.85);
    ctx.lineTo(width*.85, height*.85);
    ctx.lineTo(width*.6, 635);
    ctx.lineTo(220, 675);
    ctx.lineTo(90, 610);
  ctx.fill();

  ctx.beginPath();
    ctx.moveTo(width*.15, height*.70);
    ctx.lineTo(width*.75, height*.95);
    ctx.lineTo(90, 610);
  ctx.fill();

  ctx.fillStyle = 'rgb(252, 98, 98)';
  ctx.beginPath();
    ctx.moveTo(75, 100);
    ctx.lineTo(100, 125);
    ctx.lineTo(100, 75);
  ctx.fill();


  for (let i = 1; i < 6; i++ ) {
  ctx.fillStyle = 'rgba(103, 178, 255, 0.87)';
  ctx.beginPath();
    ctx.arc(width*((50+(i*10))/100), height*.60, width*.02, 0, Math.PI * 2, true);
  ctx.fill();
  }

  for (let i = 1; i < 6; i++ ) {
  ctx.beginPath();
    ctx.arc(width*((45+(i*10))/100), height*.80, width*.02, 0, Math.PI * 2, true);
  ctx.fill();
  }

  ctx.fillStyle = 'rgb(59, 59, 59)';
  ctx.font = `700 ${width*.2}px monospace`;
  ctx.fillText("(\uFF61\u25D5\u203F\u203F\u25D5\uFF61", width*.05, height*.6);


}

draw();
