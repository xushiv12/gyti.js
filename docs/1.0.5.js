function out(a){
	alert(a);
}
function put(a){
	let b=prompt(a);
	return b
}
function wt(a){
	document.getElementById("b").innerHTML=a;
}
function AI_local(a,b){
	alert("This is local AI.");
	window.open("https://swswsw.xushi-1009.cc/local?key="+a+"&q="+b,"_blank");
}
function AI_local_2(a){
	alert("This is local AI.");
	fetch("https://swswsw.xushi-1009.cc/local/get?key="+a)
	.then((xu)=>xu.text())
	.then((eeeee)=>document.getElementById("b").innerHTML=eeeee);
}
function AI_public(a){
	window.open("https://swswsw.xushi-1009.cc/public?q="+a,"_blank");
}
function AI_public_2(a){
	fetch("https://swswsw.xushi-1009.cc/public/get?key="+a)
	.then((xu)=>xu.text())
	.then((eeeee)=>document.getElementById("b").innerHTML=eeeee);
}
function how_to_ipt(a){
	alert("Write this in html:<script src=\""+a+"\"><\/script>");
}
function Q(a,b){
  new QRCode(document.getElementById(a),b);
}
function M(){
  new google.maps.Map( document.getElementById("map"), { center: { lat: 37.7749, lng: -122.4194 }, zoom: 12 } );
}
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
function resize(){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
}
resize();
window.addEventListener("resize",resize);

const particles=[];
const radius=6;
const maxSpeed=30;
const substeps=6;

class Particle{
    constructor(){
        this.x=radius+Math.random()*(canvas.width-radius*2);
        this.y=radius+Math.random()*(canvas.height-radius*2);
        const angle=Math.random()*Math.PI*2;
        const speed=10+Math.random()*20;
        this.vx=Math.cos(angle)*speed;
        this.vy=Math.sin(angle)*speed;
    }

    move(){
        this.x+=this.vx/substeps;
        this.y+=this.vy/substeps;

        if(this.x-radius<=0){
            this.x=radius;
            this.vx=Math.abs(this.vx);
        }
        if(this.x+radius>=canvas.width){
            this.x=canvas.width-radius;
            this.vx=-Math.abs(this.vx);
        }
        if(this.y-radius<=0){
            this.y=radius;
            this.vy=Math.abs(this.vy);
        }
        if(this.y+radius>=canvas.height){
            this.y=canvas.height-radius;
            this.vy=-Math.abs(this.vy);
        }
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,radius,0,Math.PI*2);
        ctx.fillStyle="blue";
        ctx.fill();
    }
}

function collide(a,b){
    const dx=b.x-a.x;
    const dy=b.y-a.y;
    const dist=Math.sqrt(dx*dx+dy*dy);
    const minDist=radius*2;

    if(dist===0||dist>=minDist)return;

    const nx=dx/dist;
    const ny=dy/dist;

    const relativeVX=a.vx-b.vx;
    const relativeVY=a.vy-b.vy;

    const velocityAlongNormal=
        relativeVX*nx+
        relativeVY*ny;

    if(velocityAlongNormal<=0){
        const impulse=-velocityAlongNormal;

        a.vx+=impulse*nx;
        a.vy+=impulse*ny;

        b.vx-=impulse*nx;
        b.vy-=impulse*ny;
    }

    const overlap=minDist-dist;

    a.x-=nx*overlap/2;
    a.y-=ny*overlap/2;

    b.x+=nx*overlap/2;
    b.y+=ny*overlap/2;
}

function makeParticles(){
    particles.length=0;

    for(let i=0;i<100;i++){
        let p;
        let safe=false;

        while(!safe){
            p=new Particle();
            safe=true;

            for(const other of particles){
                const dx=p.x-other.x;
                const dy=p.y-other.y;

                if(
                    Math.sqrt(dx*dx+dy*dy)
                    <radius*2
                ){
                    safe=false;
                    break;
                }
            }
        }

        particles.push(p);
    }
}

function physics(){
    for(let step=0;step<substeps;step++){

        for(const p of particles){
            p.move();
        }

        for(let i=0;i<particles.length;i++){
            for(let j=i+1;j<particles.length;j++){
                collide(
                    particles[i],
                    particles[j]
                );
            }
        }
    }
}

function draw(){
    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    for(const p of particles){
        p.draw();
    }
}

function loop(){
    physics();
    draw();
    requestAnimationFrame(loop);
}
function particle(){
    makeParticles();
    loop();
}
function run_js(a){
	let b=a;
	let c=b
	.replaceAll("xy","let")
	.replaceAll("fc","function")
	.replaceAll("prt","window.print()")
	.replaceAll("wd","window")
	.replaceAll("op","window.open")
	.replaceAll("wtime","setInterval")
	.replaceAll("otime","setTimeout")
	.replaceAll("full","document.documentElement.requestFullscreen()")
	.replaceAll("II","if")
	.replaceAll("EE","else")
	.replaceAll("FF","for")
	.replaceAll("WW","while")
	.replaceAll("W/W","WW")
	.replaceAll("F/F","FF")
	.replaceAll("E/E","EE")
	.replaceAll("I/I","II")
	.replaceAll("f/ull","full")
	.replaceAll("o/time","otime")
	.replaceAll("w/time","wtime")
	.replaceAll("o/p","op")
	.replaceAll("x/y","xy")
	.replaceAll("f/c","fc")
	.replaceAll("p/rt","prt")
	.replaceAll("w/d","wd")
	.replaceAll("/@","/")
	.replaceAll("@/","@");
	eval(c);
}
function d_python(a){
	let b=`
air=""
ftft=""
def out(a):
      print(a)
def put(a):
      b=input(a)
      return b
def AI_local(a,b):
      global ftft
      print("This is a local AI");
      c=input("Did you install ollama and ollama lib?[Y/N]:")
      if c=="Y" or c=="y":
          import ollama
          d=ollama.chat(
          model=a,
          messages=[{"role":"user","content":b}]
          )
          air=d["message"]["content"]
def AI_public(a,b):
      global ftft
      c=input("Did you install ollama and ollama lib and flask?[Y/N]:")
      if c=="Y" or c=="y":
          ftft="y"
`+a+`
from flask import Flask,request
import ollama
app=Flask(__name__)
@app.route("/")
def A():
      global ftft
      d=ollama.chat(
      model=request.args.get("m"),
      messages=[{"role":"user","content":request.args.get("q")}]
      )
      ftft=d["message"]["content"]
      return ftft
app.run(host="0.0.0.0",port=18970)
  `;
	let c=b
	.replaceAll("fc","def")
	.replaceAll("II","if")
	.replaceAll("EE","else")
	.replaceAll("FF","for")
	.replaceAll("WW","while")
	.replaceAll("W/W","WW")
	.replaceAll("F/F","FF")
	.replaceAll("E/E","EE")
	.replaceAll("I/I","II")
	.replaceAll("f/c","fc")
	.replaceAll("/@","/")
	.replaceAll("@/","@");
	const content = c;

  const blob = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(blob);

  const xxx = document.createElement("a");
  xxx.href = url;
  xxx.download = "1.py";
  xxx.click();

  URL.revokeObjectURL(url);
}
