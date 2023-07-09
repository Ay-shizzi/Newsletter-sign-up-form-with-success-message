const signUp = document.getElementById('Sign-up');
const input = document.getElementById('input_field');
const errorMessage = document.getElementById('error-message');
const btnSignUp = document.getElementById('btn_sign-up');
const Success = document.getElementById('Success');
const btnSuccess = document.getElementById('btn_Success');
let mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

btnSignUp.addEventListener('click', toSuccess);
btnSuccess.addEventListener('click', toSignUp)

function toSuccess(){
    if(input.value.match(mailValid)){
        signUp.style.display = 'none'
        Success.style.display = 'block'
    }else{
        errorMessage.style.display = 'block'
        input.style.border = '1px solid hsl(4, 100%, 67%)'
        input.style.backgroundColor = 'hsl(4, 100%, 67%, 0.5)'
        input.style.color = 'hsl(4, 100%, 67%)'
    }
}
function toSignUp(){
    signUp.style.display = 'grid'
    Success.style.display = 'none'
    errorMessage.style.display = 'none'
    input.value = ''
    input.style.backgroundColor = ''
    input.style.color = ''
    input.style.border = ''
}