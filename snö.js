

window.onload= function(){

var canvas=document.getElementById("canvas");

var ctx=canvas.getContext("2d");

var W=window.innerWidth;
var H=window.innerHeight;

canvas.width=W;
canvas.height=H;

var mp = 300;

var particles=[];

for (var i=0;i<mp;i++){

particles.push({x:Math.random()*W, y:Math.random()*H, r:Math.random()*5+1, d:Math.random()*mp  });

}


var gravitation=1;


function draw(){

 ctx.clearRect(0,0,W,H);
 ctx.fillStyle="rgba(255,255,255,0.8)";
 ctx.beginPath();

for(var i=0;i<mp;i++){

    var p=particles[i];
 ctx.moveTo(p.x,p.y);
 ctx.arc(p.x,p.y,p.r,0,2*Math.PI,true);
}
ctx.fill();
update();
}



function update(){



  for (var i = 0; i < mp; i++) {

    var p=particles[i];

    if(i%1==0){
        p.y+= gravitation;
    }

    

    if(p.y>H){

      p.y=0;
    }
}

}


setInterval(draw,40);


}
