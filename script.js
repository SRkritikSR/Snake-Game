document.addEventListener("DOMContentLoaded", function(){

var myVAr;
var height;
// var width_loc1;
var width_loc=0;
var width;
// var width_animate;
// var height_animate;
var height_loc=50;
height=document.querySelector(".container-fluid2").clientHeight;

width=document.querySelector(".container-fluid2").clientWidth;
console.log("the height is: ",height);
console.log("the width is :",width);
document.querySelector(".startBtn")
	.addEventListener("click",function (){
		document.querySelector("audio").play();
			
});
window.addEventListener("keyup",function (e) {
	if (e.keyCode==38) {
		document.querySelector(".upBtn").click();
	}
});

window.addEventListener("keydown",function (e) {
	if (e.keyCode==40) {
		document.querySelector(".dwnBtn").click();
	}
});

window.addEventListener("keydown",function (e) {
	if (e.keyCode==39) {
		document.querySelector(".rgtBtn").click();
	}
});

window.addEventListener("keydown",function (e) {
	if (e.keyCode==37) {
		document.querySelector(".lftBtn").click();
	}
});
document.querySelector(".rgtBtn")
		.addEventListener("click",function (){
			clearInterval(myVAr);
			myVAr=setInterval(hello,100);
			width_loc1=document.querySelector(".animate").offsetLeft;
			console.log(" RIGHT BUTTON PRESSED The width loc is:", width_loc1);
			function hello() {
				if (width_loc==99) {
					width_loc=0;
					console.log(width_loc); 
				}
				else {
					width_loc++;
					console.log("the local width is: ", width_loc);	
					document.querySelector(".animate").style.left=width_loc+"%";
			}
			}
		});
document.querySelector(".lftBtn")
		.addEventListener("click",function (){
			clearInterval(myVAr);
			console.log("THE LEFT BUTTON HAS BEEN PRESSED")
			myVAr=setInterval(hello2,100);
			width_loc1=document.querySelector(".animate").offsetLeft;
			console.log("The width loc is:", width_loc1);
			function hello2() {
				if (width_loc==0) {
					width_loc=99;
					console.log(width_loc); 
				}
				else {
					width_loc--;
					console.log("the local width is: ", width_loc);	
					document.querySelector(".animate").style.left=width_loc+"%";
			}
			}
		});
document.querySelector(".dwnBtn")
		.addEventListener("click",function (){
			clearInterval(myVAr);
			console.log(" DOWN BUTTON PRESSEDthe height is given by: ",height_loc);	
			myVAr=setInterval(hello3,100);
			function hello3() {
				if (height_loc==99) {
					height_loc=0;
					console.log("the height is given by",height_loc)
				}
				else {
					height_loc++;
					console.log("height in loop is : ",height_loc);
					document.querySelector(".animate").style.top=height_loc+"%";
			}
			}
		});	


 document.querySelector(".upBtn")
		.addEventListener("click",function (){
			clearInterval(myVAr);
			console.log("UP BUTTON PRESSED the height is given by: ",height_loc);	
			myVAr=setInterval(hello4,100);
			function hello4() {
				if (height_loc==0) {
					height_loc=99;
					console.log("the height is given by",height_loc);
				}
				else {
					height_loc--;
					console.log("height in loop is : ",height_loc);
					document.querySelector(".animate").style.top=height_loc+"%";
			}
			}
		});

});
