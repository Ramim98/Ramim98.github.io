var deg;
var degm;

function second(){

var d = new Date();
var sec=d.getSeconds();
const secondHand=document.querySelector(".second");
if(sec==0){
	secondHand.style.transition="none"; 
}
else{
 deg=sec*6+90;
 
secondHand.style.transform=`rotate(${deg}deg)`; 
}
}

setInterval(second,100);





//------------MINUTES---------------

function minute(){

var dm = new Date();
var minute=dm.getMinutes();
const minuteHand=document.querySelector(".minute");
if(minute==0){
	minuteHand.style.transition="none";
}
else{
 degm=minute*6+90;
 

minuteHand.style.transform=`rotate(${degm}deg)`; 
}
}
setInterval(minute,1000);

//---------HOUR---------------

function hour(){
var dh = new Date();
 const hourHand=document.querySelector(".hour");
var hour=dh.getHours();
 if(hour==0){
 	hourHand.style.transition="none";
 }
 else{

 degh=hour*15+90;


hourHand.style.transform=`rotate(${degh}deg)`; 
}
}
setInterval(hour,1000);