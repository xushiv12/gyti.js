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

makeParticles();
loop();
