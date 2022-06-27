let email = document.getElementById("exampleInputEmail1");
let pwd = document.getElementById("exampleInputPassword1");
let str = document.getElementById("passHelp");




function validate(){
    if(email.value.trim()==""){
        alert("field cannot be empty");
        return false;
    }
    else if(pwd.value.trim()==""){
        alert("please provide password");
        return false;
    }
    else if(pwd.value.length<=8){
        alert("password should contain 8 character");
        return false;
    }
    // else if(pwd.value.length>12){
    //     pwd.style.border="2px solid red";
    //     return false;
    // }
}


// function valids(){
//     let regexp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
//         if(regexp.test(pwd.value)){
//             str.innerHTML="password is weak";
//             return false;
//         }
// }


function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    let pwd = document.getElementById("exampleInputPassword1");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    }
     else if (false == enoughRegex.test(pwd.value)) {
         pwd.style.border="2px solid green";
        strength.innerHTML = 'More Characters';
    }
     else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    }
     else if (mediumRegex.test(pwd.value)) {
         pwd.style.border="2px solid orange";
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    }
     else {
         pwd.style.border="2px solid red";
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}

