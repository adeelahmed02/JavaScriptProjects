//Document Object Model

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to show error 
function showError(input,massage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = massage;
}

// Function to show success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// function to check if email is valied
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    } else {
        showError(input,`${getFieldId(input)} is not valid`);
    }

}

// function to check if required fileds have data
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if (input.value === ''){
            console.log(input.id);
            //showError(input,input.id+' is required');
            showError(input,`${getFieldId(input)} is required `);

        }   else {
            showSuccess(input);
        }

    });   
}

// function to check length of input field
function checkLength(input, min, max){
    if (input.value.length < min ){
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`);
    }else if (input.value.length >max){
        showError(input,`${getFieldId(input)} needs to be less then ${max} characters`);
    } else{
        showSuccess(input);
    }
    
}

// function to check if password are match
function checkPasswordsMatch(input1,input2){
    if (input1.value !== input2.value){
        showError(input2,"Password don't match");
    }

}


// functoion to get the id of the input filed proper Case 

function getFieldId(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

// This is an Event listener for the form on 
form.addEventListener('submit',function(e){
    e.preventDefault();
 
    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordsMatch(password,password2);

})





