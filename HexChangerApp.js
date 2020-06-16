
         //--------Declaring variables---------

var colorBox= document.querySelector("#colorBox");
var button= document.querySelector("#button");
button.style.cursor="pointer";
var colorCodeText = document.querySelector(".colorCodeText");
const hexNumber = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

	     //---------Adding Event Listener----------

button.addEventListener("click", function changeColor(event){
	event.preventDefault();

	            /*--------hex code generator----------*/

	var colorCode="#"
	for(var i=1; i<=6; i++){

             var hexCode= Math.floor(Math.random()*hexNumber.length);
	         colorCode=colorCode+hexNumber[hexCode];
    }

//----------Changing Color & innerText---------

	colorBox.style.backgroundColor=colorCode;
	colorCodeText.innerText=colorCode;

});

//----------------OKAY BYE----Made by Ramim -------------