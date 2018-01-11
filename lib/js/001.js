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


  ctx.fillStyle = 'rgb(204, 249, 249)';
  ctx.fillRect(.1*width, .1*height, .8*width, .5*height);

  ctx.fillStyle = 'rgba(206, 244, 107, 0.45)';
  ctx.beginPath();
    ctx.moveTo(width*.65, height*.85);
    ctx.lineTo(800, height*.85);
    ctx.lineTo(width*.6, 635);
    ctx.lineTo(220, 675);
    ctx.lineTo(90, 610);
  ctx.fill();

  ctx.fillStyle = 'rgba(206, 244, 107, 0.4)';
  ctx.beginPath();
    ctx.moveTo(width*.15, height*.70);
    ctx.lineTo(400, height*.95);
    ctx.lineTo(width*.1, 600);
    ctx.lineTo(220, 675);
    ctx.lineTo(90, 610);
  ctx.fill();

  ctx.strokeStyle = 'rgb(66, 65, 111)';
  ctx.strokeRect(.2*width, 200, .6*width, .5*height);

  ctx.fillStyle = 'rgb(252, 98, 98)';
  ctx.beginPath();
    ctx.moveTo(75, 100);
    ctx.lineTo(100, 125);
    ctx.lineTo(100, 75);
  ctx.fill();


  for (let i = 1; i < 6; i++ ) {
  ctx.fillStyle = 'rgba(251, 239, 79, 0.79)';
  ctx.beginPath();
    ctx.arc(width*((50+(i*10))/100), height*.59, width*.02, 0, Math.PI * 2, true);
  ctx.fill();
  }

  for (let i = 1; i < 6; i++ ) {
  ctx.beginPath();
    ctx.arc(width*((45+(i*10))/100), height*.89, width*.02, 0, Math.PI * 2, true);
  ctx.fill();
  }

  ctx.fillStyle = 'rgb(59, 59, 59)';
  ctx.font = `700 ${width*.2}px monospace`;
  ctx.fillText("(\uFF61\u25D5\u203F\u203F\u25D5\uFF61", width*.06, height*.6);


}

draw();
