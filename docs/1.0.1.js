let lllll="";
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
function ipt(a){
	fetch(a)
	.then((xu)=>xu.text())
	.then((eeeee)=>lllll=eeeee);
}
function run(a){
	let b=lllll+a;
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
