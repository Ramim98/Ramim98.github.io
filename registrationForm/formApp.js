var submitBtn= document.querySelector("#subBtn");
var form = document.querySelector("#form");
var userName=document.querySelector("#userName");
var userPass=document.querySelector("#userPass");
// var userNameValue=document.querySelector("#userName").value;
// var userPass=document.querySelector("#userPass").value;
const regexpUN = new RegExp("^[A-Za-z][A-Z0-9\ a-z\-]{4,19}$");
const regexpFL = new RegExp("^[A-Za-z]$");
const regexpPW = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!^&()*$#@%?]).{8,32}$");
const regexpEM = new RegExp("^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+[\.][A-Za-z]{2,63}$");
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
		// firstLetterLog.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
    firstLetterLog.classList.add("u_valid");
    firstLetterLog.classList.remove("u_unvalid");
	}

	else{
		// firstLetterLog.style.cssText="color:red;";
     firstLetterLog.classList.add("u_unvalid");
      firstLetterLog.classList.remove("u_valid");
	}
})

      //---------Special Charecter error---------//


   userName.addEventListener("input", function noSpecialChar(){
	var userNameValue=document.querySelector("#userName").value;
	const regexpNSC = new RegExp("^[A-Za-z]?[A-Z\ 0-9a-z\-]+$");
	if(regexpNSC.test(userNameValue)==true){
		// canContain.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
     canContain.classList.add("u_valid");
      canContain.classList.remove("u_unvalid");
	}

	else{
		// canContain.style.cssText="color:red;";
    canContain.classList.add("u_unvalid");
    canContain.classList.remove("u_valid");
	}
})

     //--------------Number of Charecter error-----------//

     userName.addEventListener("input", function userNameCount(){
	var userNameValue=document.querySelector("#userName").value;
	
	if(userNameValue.length>4 && userNameValue.length<21){
		// nameCount.style.cssText="color:green; font-size:12px; text-decoration: line-through;";
	 nameCount.classList.add("u_valid");
   nameCount.classList.remove("u_unvalid");
  }

	else{
		// nameCount.style.cssText="color:red;";
     nameCount.classList.add("u_unvalid");
      nameCount.classList.remove("u_valid");
	}
})

     //-------------border color change for Username---------//

     function unBorder(){
  var userNameValue=document.querySelector("#userName").value;
  if(regexpUN.test(userNameValue)==true){
    userName.style.border="2px solid green";
     userName.style.borderRadius="5px";
     userName.style.backgroundColor="#D4F6E1";
    return true;
  }

  else{
    userName.style.border="2px solid red";
    userName.style.borderRadius="5px";
     userName.style.backgroundColor="#F6D4D9"
    return false;
   
  }
}

     userName.addEventListener("input",unBorder);

//----------------Password ----------------------------------------------

       //---------Number of Charecters error--------//

   userPass.addEventListener("input", function userPassCount(){
   		var userPassValue=userPass.value;
   		var passCount = document.querySelector("#passCount");
   		if(userPassValue.length>7 && userPassValue.length<33){
   		// passCount.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
      passCount.classList.add("u_valid");
      passCount.classList.remove("u_unvalid");
   		}
   		else{
   			// passCount.style.cssText="color:red;";
         passCount.classList.remove("u_valid");
      passCount.classList.add("u_unvalid");
   		}
   } )

	//---------must contain upper & lower case letters-------//

	 userPass.addEventListener("input", function passMustLetters(){
   		var userPassValue=userPass.value;
   		var mustLetters = document.querySelector("#mustLetters");
   		const regexpPWML = new RegExp("^(?=.*[a-z])(?=.*[A-Z])+");
   		if(regexpPWML.test(userPassValue)==true){
   		// mustLetters.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
      mustLetters.classList.add("u_valid");
      mustLetters.classList.remove("u_unvalid");
   		}
   		else{
   			// mustLetters.style.cssText="color:red;";
        mustLetters.classList.remove("u_valid");
      mustLetters.classList.add("u_unvalid");
   		}
   } )

	 //------------------Must contain number & special charecter------------//

 userPass.addEventListener("input", function passMustLetters(){
   		var userPassValue=userPass.value;
   		var specialNumber = document.querySelector("#specialNumber");
   		const regexpPWSN = new RegExp("^(?=.*[0-9])(?=.+[!^&*()$#@%?])");
   		if(regexpPWSN.test(userPassValue)==true){
   		// specialNumber.style.cssText="color:green; font-size:12px; text-decoration: line-through;"
          specialNumber.classList.add("u_valid");
          specialNumber.classList.remove("u_unvalid");
   		}
   		else{
   			// specialNumber.style.cssText="color:red;";
        specialNumber.classList.remove("u_valid");
          specialNumber.classList.add("u_unvalid");
   		}
   } )

  	//------------border color change--password----------//

 function passBorder (){
      var userPassValue=userPass.value;
      
      if(regexpPW.test(userPassValue)==true){
        userPass.style.border="2px solid green";
         userPass.style.borderRadius="5px";
        userPass.style.backgroundColor="#D4F6E1";
      return true;
    
      }
      else{
        userPass.style.border="2px solid red";
         userPass.style.borderRadius="5px";
          userPass.style.backgroundColor="#F6D4D9"
        return false;
    
      }
   }



userPass.addEventListener("input",passBorder );

//-------------------Email Validation----------------//


const email=document.querySelector("#email");
function EmailValidate(){
var emailValue=email.value;
var emailCheck=document.querySelector("#emailCheck");

  if(regexpEM.test(emailValue)==true){
    emailCheck.classList.add("u_valid");
     emailCheck.classList.remove("u_unvalid");
     email.style.border="3px solid green";
        email.style.backgroundColor="#D4F6E1";
        return true;

}

else{
  emailCheck.classList.add("u_unvalid");
  emailCheck.classList.remove("u_valid");
  email.style.border="2px solid red";
        email.style.backgroundColor="#F6D4D9";
        return false;
}
}
email.addEventListener("input",EmailValidate);



//----------confirm Password-------------//


function confirmPassword(){
  var confirmPass=document.querySelector("#ConfirmPass");
  var confirmPassValue=confirmPass.value;
   var userPassValue=userPass.value;
  if(userPassValue==confirmPassValue){
    return true;
  }
  else{
    return false;
  }
}









//-------------test Button----------//

 function checked(){
 if(unBorder()==true && passBorder()==true && EmailValidate()==true && confirmPassword()==true){
 
  return true;
 }
 else if(confirmPassword()==false){
   var confirmPass=document.querySelector("#ConfirmPass");
   var passLog=document.querySelector("#passCheck");
   confirmPass.style.border="2px solid red";
   confirmPass.style.borderRadius="5px";
    confirmPass.style.backgroundColor="#F6D4D9";
   passLog.classList.add("u_unvalid");

   return false;
 }
 else{
  return false;
 }
}




