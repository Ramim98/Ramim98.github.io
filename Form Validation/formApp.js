var submitBtn= document.querySelector("#submitBtn");
var form = document.querySelector("#form");
var userName=document.querySelector("#userName");
var userPass=document.querySelector("#userPass");
// var userNameValue=document.querySelector("#userName").value;
// var userPass=document.querySelector("#userPass").value;
const regexpUN = new RegExp("^[A-Za-z][A-Z0-9\ a-z\-]{4,19}$");
const regexpFL = new RegExp("^[A-Za-z]$");
const regexpPW = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!^&()*$#@%?]).{8,32}$");
var nameLogs = document.querySelector("#nameLogs");
var passLogs = document.querySelector("#passLogs");
var canContain=document.querySelector("#canContain");
var nameCount = document.querySelector("#nameCount");


//-----------UserName----------------------------------------------

        //------First Letter error-----------//

userName.addEventListener("input", function FirstLetter(){
	var userNameValue=document.querySelector("#userName").value;

	var firstLetterLog = document.querySelector("#firstLetter");
	if(regexpFL.test(userNameValue.charAt(0))==true){
		firstLetterLog.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
	}

	else{
		firstLetterLog.style.cssText="color:red;";
	}
})

      //---------Special Charecter error---------//


   userName.addEventListener("input", function noSpecialChar(){
	var userNameValue=document.querySelector("#userName").value;
	const regexpNSC = new RegExp("^[A-Za-z]?[A-Z\ 0-9a-z\-]+$");
	if(regexpNSC.test(userNameValue)==true){
		canContain.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
	}

	else{
		canContain.style.cssText="color:red;";
	}
})

     //--------------Number of Charecter error-----------//

     userName.addEventListener("input", function userNameCount(){
	var userNameValue=document.querySelector("#userName").value;
	
	if(userNameValue.length>4 && userNameValue.length<21){
		nameCount.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
	}

	else{
		nameCount.style.cssText="color:red;";
	}
})

     //-------------border color change for error---------//


     userName.addEventListener("input", function unBorder(){
	var userNameValue=document.querySelector("#userName").value;
	if(regexpUN.test(userNameValue)==true){
		userName.style.border="3px solid green";
		 p2= "true";
		
	}

	else{
		userName.style.border="2px solid red";
		
		 p2="false";
	}
})

//----------------Password -------------------

       //---------Number of Charecter error--------//

   userPass.addEventListener("input", function userPassCount(){
   		var userPassValue=userPass.value;
   		var passCount = document.querySelector("#passCount");
   		if(userPassValue.length>7 && userPassValue.length<33){
   		passCount.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
   		}
   		else{
   			passCount.style.cssText="color:red;";
   		}
   } )

	//---------must contain upper & lower case letters-------//

	 userPass.addEventListener("input", function passMustLetters(){
   		var userPassValue=userPass.value;
   		var mustLetters = document.querySelector("#mustLetters");
   		const regexpPWML = new RegExp("^(?=.*[a-z])(?=.*[A-Z])+");
   		if(regexpPWML.test(userPassValue)==true){
   		mustLetters.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
   		}
   		else{
   			mustLetters.style.cssText="color:red;";
   		}
   } )

	 //------------------Must contain number & special charecter------------//

 userPass.addEventListener("input", function passMustLetters(){
   		var userPassValue=userPass.value;
   		var specialNumber = document.querySelector("#specialNumber");
   		const regexpPWSN = new RegExp("^(?=.*[0-9])(?=.+[!^&*()$#@%?])");
   		if(regexpPWSN.test(userPassValue)==true){
   		specialNumber.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
   		}
   		else{
   			specialNumber.style.cssText="color:red;";
   		}
   } )

  	//------------border color change--password----------//




userPass.addEventListener("input", function passMustLetters (){
   		var userPassValue=userPass.value;
   		
   		if(regexpPW.test(userPassValue)==true){
   			userPass.style.border="3px solid green";
   			userPass.style.backgroundColor="#D4F6E1";
   		 p1="true";
		
   		}
   		else{
   			userPass.style.border="2px solid red";
   			userPass.style.backgroundColor="#F6D4D9";
   			 p1= "false";
		
   		}
   } );
console.log(p1);

if(p1=="true" && p2=="true" ){
	submitBtn.disabled=false;
	console.log("true")
}
else{
	submitBtn.disabled=true;
	console.log("false")
}








