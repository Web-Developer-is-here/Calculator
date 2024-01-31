const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const arr = [];
let hue = 0;

canvas.style.background = '#000000';

canvas.width = window.innerWidth;
canvas.height = window.innerHeight = 674;

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const mouse = {
  x : undefined,
  y : undefined
}

canvas.addEventListener('click',function(event){
  
  mouse.x = event.x;
  mouse.y = event.y;
  
  for(let k = 0; k < Math.random()*5+5; k ++){
    arr.push(new Particles);
  }
  
  
});

class Particles{
  constructor(){
    this.x = mouse.x;
    this.y = mouse.y;
    //this.x = Math.random()*canvas.width;
    //this.y = Math.random()*canvas.height;
    this.size = Math.random()*15 + 1;
    this.vector_x = Math.random()*3 -1.5;
    this.vector_y = Math.random()*3 -1.5;
    this.color = `hsl(${hue},100%,50%)`;
    
  }
  update(){
    this.x += this.vector_x;
    this.y += this.vector_y;
    if(this.size > 0.2){
      this.size -= 0.1;
    }
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2,true);
    //ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}

function init(){
  for(let i = 0; i< 100; i++){
    arr.push(new Particles);
  }
}

init();
//console.log(arr)

function handle(){
  for(let j = 0; j < arr.length; j++){
    arr[j].update();
    arr[j].draw();
  }
}


 const animation = () => {
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(0,0,0,0.1)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fill();
 // drawCircle();
 handle();
 hue+=5.1;
  requestAnimationFrame(animation);
}

animation(); 