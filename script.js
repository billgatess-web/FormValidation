let nameError = document.getElementsByClassName("name-error")[0];
let phoneError = document.getElementsByClassName("phone-error")[0];
let emailError = document.getElementsByClassName("email-error")[0];
let messageError = document.getElementsByClassName("message-error")[0];
let submitError = document.getElementsByClassName("submit-error")[0]; 

function validateName(){
    var name = document.getElementsByClassName('contact-name')[0].value;

    if(name.length == ''){
        nameError.innerHTML = "Name is Required*";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write your full name*";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #0ed100;"></i>';
    return true;
}

function validatePhone(){
    var phone = document.getElementsByClassName("contact-phone")[0].value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Enter Your Phone Number';
        return false
    }
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone Number should be 11 Digits!';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Give Only Numbers';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #0ed100;"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementsByClassName("contact-email")[0].value;

    if (email.length == 0){
        emailError.innerHTML = 'Enter Your Email';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #0ed100;"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementsByClassName("contact-message")[0].value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' More Charatcers are required';
        return false;
    }

    if(message.length == 0 || left == 0)  {
        messageError.innerHTML = 'Message is Required'
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #0ed100;"></i>';
    return true;

}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMessage() || !validateEmail()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix all the errors to submit'
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false
    }
}