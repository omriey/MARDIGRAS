
//Create The Variabels
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const comment__box = document.getElementById('comment__box');


//show Error
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Sucsses
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
    
}


//Prevent the Submit
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(fname.value  == ''  ){
        showError(fname,'User First Name is Required');
    }
    else{
        showSuccess(fname);
    }
    if( lname.value == '' ){
        showError(lname,'User Last Name is Required');
    }
    else{
        showSuccess(lname);
    }
    if(email.value  == '' || email.value.indexOf('@') == -1){
        showError(email,'Email Structure Is Not Correct');
    }
    else{ 
        showSuccess(email);
    }
        if(comment__box.value  == ''){
        showError(comment__box,'Some text is required');
    }
    else{
        showSuccess(comment__box);
    }   
    });