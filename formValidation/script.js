let firstName = "" ;
let lastName = "";
let phoneNumber = "" ;
let email = "";
let password = "" ;

let isFirstNameValid = false 
let  isLastNameValid =  false;
let isPhoneNumberValid = false;
let isEmailValid =false ;
let isPasswordValid =  false ;

const emptyFields = document.querySelectorAll(".empty-field");
const validDatas = document.querySelectorAll(".valid-data");
const form = document.querySelector('form');
const loginButton = document.getElementById('login');
const nameregx = /^[A-Z][a-z]+$/;
const numberrgx =/^[6-9][0-9]{9}/;
const emailrgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordrgx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
//hiding the emptyfields
for(let emptyField of emptyFields){
    emptyField.classList.add('d-none');
}
//hiding the errors
for(let validData of validDatas){
    validData.classList.add('d-none');
}

//adding event listner to each input element through event delegation
form.addEventListener('keyup',(event)=>{
    let field = event.target.dataset.field ;
    switch(field){
        case "firstName":firstName = event.target.value;
        break ; 
        case "lastName":lastName = event.target.value;
        break ; 
        case "phoneNumber":phoneNumber = event.target.value;
        break ; 
        case "email":email = event.target.value;
        break ; 
        case "password":password = event.target.value;
        break ; 
        default:
            firstName = lastName = email = password = phoneNumber = "";
            break;
    }
});

function validateInput( inputRegx , inputId ,inputData  ){
    console.log(inputData);
    const validDataText = document.querySelector(`#${inputId} .valid-data`) ;
    const emptyFieldText = document.querySelector(`#${inputId} .empty-field`) ;
    if(inputData!== ""){
        if(inputRegx.test(inputData)){
            validDataText.classList.add('d-none');
            emptyFieldText.classList.add('d-none');
            return true ;
        }
        else{
            validDataText.classList.remove('d-none');
            emptyFieldText.classList.add('d-none');
            return false ;
        }
        
    }else{
        emptyFieldText.classList.remove('d-none');
        return false ;
    }
}



loginButton.addEventListener('click' , (event)=>{
    event.preventDefault();

    //first name checking
    isFirstNameValid = validateInput(nameregx , "first-name" ,firstName)

    //last name checking
    isLastNameValid = validateInput(nameregx , "last-name" ,lastName)

    //phone number checking
    isPhoneNumberValid = validateInput(numberrgx , "phone-number" ,phoneNumber)

    //email checking
    isEmailValid = validateInput(emailrgx , "email" ,email)

    //password checking
    isPasswordValid = validateInput(passwordrgx , "password" , password)

    if(isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid &&isPhoneNumberValid){
        window.location.href = "../QuizifyProject/index.html"
    }
});