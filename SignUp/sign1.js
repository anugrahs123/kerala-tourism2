function pattern3(){
    let number = document.getElementById("inputphone").value;
    let numbers = /^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if(numbers.test(number)){
        let error=document.getElementById("error")
        form.classList.add("valid");
        form.classList.remove("invalid");
        error.innerHTML="Your Phone number is valid";
        error.style.color="#00ff00";
        // phone5.innerHTML="valid";
        // return true;
        
    }
    else{
        form.classList.remove("valid");
        form.classList.add("invalid");
        error.innerHTML="Enter valid Phone number";
        error.style.color="#ff0000";
        // return false;
    }

}



function passwordChanged1() {
    var strength1 = document.getElementById('strength1');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    let pwd1 = document.getElementById("inputPassword4");
    if (pwd1.value.length == 0) {
        strength1.innerHTML = 'Type Password';
    }
     else if (false == enoughRegex.test(pwd1.value)) {
         pwd1.style.border="2px solid green";
        strength1.innerHTML = 'More Characters';
    }
     else if (strongRegex.test(pwd1.value)) {
        strength1.innerHTML = '<span style="color:green">Strong!</span>';
    }
     else if (mediumRegex.test(pwd1.value)) {
         pwd1.style.border="2px solid orange";
        strength1.innerHTML = '<span style="color:orange">Medium!</span>';
    }
     else {
         pwd1.style.border="2px solid red";
        strength1.innerHTML = '<span style="color:red">Weak!</span>';
    }
}
