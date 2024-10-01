//wishList data
let data =  localStorage.getItem('data')!= null ? JSON.parse(localStorage.getItem('data')) : [] ;

let addButton = document.querySelector('.add-button');
let userInput = document.querySelector(".input-box");
let listContainer = document.querySelector(".list-container");
//the function below creates unique id each time
let createUniqueId = ()=>{
    let timeStamp = Date.now().toString();
    let randomNum = Math.floor(100000 + Math.random()*900000).toString();
    return (timeStamp + randomNum);
}
//the below function render all the wish list into list-container
function renderList(){
    listContainer.innerHTML= "";
    localStorage.setItem('data', JSON.stringify(data));
    data.forEach(({name , isCompleted , id})=>{
        let wish = document.createElement('div');
        wish.classList.add('list');
        wish.innerHTML = `
                <label data-key=${id}  for="${id}" class="${isCompleted? "strikeThrough": ""}"> <input data-key=${id} ${isCompleted ? 'checked' : ""} type="checkbox" name="wish" id="${id}"> ${name}</label>
                <button class="delete-button" data-delete=${id} >Delete</button>
            `

        listContainer.appendChild(wish);    
    })
}

//when the user clicks add button
addButton.addEventListener('click' , (event)=>{
    event.preventDefault();
    
    //accessing the data
    if(userInput.value != ''){
    data.push({id: createUniqueId() , name: userInput.value , isCompleted: false });
    renderList();
    }
    userInput.value = "";
});

//now we will add events on wish list

listContainer.addEventListener('click', (event)=>{
    let key = event.target.dataset.key ;
    let deleteKey = event.target.dataset.delete ;
    // changing the strikethrough
    if(key !==undefined ){
    data = data.map((value)=>{
        if(value.id == key){
            value.isCompleted = !value.isCompleted;
            return value ;
        }
        return value ;
    })
    }
    if(deleteKey!=undefined){
    data = data.filter((value)=> value.id != deleteKey );
    }
    
    renderList();
})


//running render list to check wheather data is present in the local storage or not
renderList();