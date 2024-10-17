const input = document.querySelector('input');
const display = document.querySelector('.display');
const button =  document.querySelector('.btn') ;
let searchValue = ""
input.addEventListener('keyup' , (event)=>{
    searchValue = event.target.value;
    display.innerText = ""
    display.innerText = searchValue ;
})

button.addEventListener('click' , ()=>{
    let i = 0 ; 
    let j = searchValue.length -1 ;
    let array = searchValue.split('');
    while(i < j){
        let temp = array[i];
        array[i] = array[j] ; 
        array[j] = temp ;
        i++;
        j-- ;
    }
    searchValue = array.join('');
    display.innerText = "";
    display.innerText = searchValue;
})