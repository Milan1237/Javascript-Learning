const form = document.getElementById('formContainer');
const savedBox = document.querySelector('.savedBox');

form.addEventListener('submit' , handleClick);
function handleClick(event){
    event.preventDefault();
    const result = {};
    const formData = new FormData(form);
    result.brand = formData.get('brand');
    result.model = formData.get('model');
    result.year = formData.get('year')
    
    if(result.brand && result.model && result.year){
        saveItems(result);
    }
    form.reset();
}

function saveItems(obj){
    const savedItemContainer = document.createElement('div');
    savedItemContainer.classList.add('savedItems');
    const brand = document.createElement('p');
    brand.innerText = obj.brand ;
    const model = document.createElement('span');
    model.innerText = obj.model ; 
    brand.appendChild(model);
    const year = document.createElement('p');
    year.innerText = obj.year ; 
    savedItemContainer.appendChild(brand) ; 
    savedItemContainer.appendChild(year) ; 
    savedBox.appendChild(savedItemContainer);
}
