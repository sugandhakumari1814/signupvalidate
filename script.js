const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('number');
const password = document.getElementById('pswd');
const cnpassword= document.getElementById('cnpswd');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    Validate();
});

const send = (newUsername,scount,count) =>{
    if(scount === count){
       alert("Registration successful");
       swal("Welcome! "+newUsername,"Your registration is successful","success");
   
    }
}
 
const successMsg = (newUsername) =>{
    let input = document.getElementsByClassName('inputbx');

    var count = input.length - 1;
    var scount = 0;
    for(var i = 0; i< input.length; i++){
         if(input[i].className === ' inputbx success'){
            var scount = 0 + i;
        }
        else{
            return false;
        }
    }
    send(newUsername,scount,count);
}
const isEmail = (newEmail) =>{
    var atsym = newEmail.indexOf("@");
    if(atsym == 0)  return false;
    var dot = newEmail.lastIndexOf(".");
    if(dot == newEmail.length - 1) return false;
    if(dot <= atsym + 2) return false;
    return true;
}


//Validate function

const Validate = () =>{
    const newUsername =username.value.trim();
    const newEmail = email.value.trim();
    const newPhone = phone.value.trim();
    const newPassword = password.value.trim();
    const newCnpassword = cnpassword.value.trim();

    //validate username
    if(newUsername === ""){
        setErrorMsg(username, 'username cannot be blank');
    }
    else{
        setSuccessMsg(username);
    }

    //validate email
    if(newEmail === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(newEmail)){
        setErrorMsg(email, 'Not a valid email');
    }
    else{
        setSuccessMsg(email);
    }

    //validate number
    if(newPhone === ""){
        setErrorMsg(phone, 'Number cannot be blank');
    }
    else if(newPhone.length != 10){
        setErrorMsg(phone, 'Number should be of 10 digits.');
    }
    else{
        setSuccessMsg(phone);
    }

    //validate password
    if(newPassword === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(newPassword.length<8){
        setErrorMsg(password, 'Password must be of atleast 8 character');
    }
    else{
        setSuccessMsg(password);
    }

    //validate confirm password
    if(newCnpassword === ""){
        setErrorMsg(cnpassword, 'Confirm password cannot be blank');
    }
    else if(newPassword.length<8){
        setErrorMsg(cnpassword, 'Confirm password must be of atleast 8 character');
    }
    else if(newCnpassword != newPassword){ 
        setErrorMsg(cnpassword, 'Password are not matching');
    
    }
    else{
        setSuccessMsg(cnpassword);
       
    }

    successMsg(newUsername);
}
function setErrorMsg(inp, err){
    const msg = inp.parentElement;
    const small = msg.querySelector('small');
    msg.className = " inputbx error";
    small.innerText = err;
}
function setSuccessMsg(inp){
    const msg = inp.parentElement;
    msg.className = " inputbx success";
}