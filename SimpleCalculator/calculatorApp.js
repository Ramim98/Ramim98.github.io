//--------Declearing Variable----------
var screenText=document.querySelector("#screenText");
var buttons = document.querySelector(".buttonContainer");
var inputs = document.getElementsByTagName("input");
var one= document.querySelector("#n1");
var screenValue="";
var on =document.querySelector("#on");


//------Test------
buttons.addEventListener("click", event=>{
	var value=event.target.value;
	
    if(value==undefined){
    
    	console.log(value);
    }

    else if (value == "="){
    	var answer= eval(screenValue);
    	screenText.innerText=answer;
    }
    else if (value == "AC"){
    	screenText.innerText="0";
    	screenValue="";
    }
    else if (value == "On"){
    	screenText.style.color="white";
    	screenText.innerText="0"
    	screenValue="";
    	on.classList.remove("live");
    	screenText.classList.add("welcome");
    	    }
     else if (value == "Off"){
    	screenText.style.color="black";
    	screenValue="";
    	on.classList.add("live");
    	screenText.classList.remove("welcome");
    }



    else {
    	
    	screenValue=screenValue+value;
    	screenText.innerText=screenValue;


}
});








// buttons.addEventListener("click", function num(event){
// 	if(event.target===inputs){
// 		screenText.innerText=event.target.value;
// 	}
// 	else{


// 	console.log(event);
// }
// }));