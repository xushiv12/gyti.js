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
      c=input("Did you install ollama and ollama lib and flask?[Y/N]:")
      if c=="Y" or c=="y":
          ftft="y"
from flask import Flask,request
import ollama
app=Flask(__name__)
@app.route("/")
def A():
      d=ollama.chat(
      model=request.args.get("m"),
      messages=[{"role":"user","content":request.args.get("q")}]
      )
      ftft=d["message"]["content"]
      return ftft
app.run(host="0.0.0.0",port=18970)
  `+a;
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
