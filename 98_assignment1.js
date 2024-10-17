const container = document.querySelector('.container');
let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
   ];

function appendCards(products , parentElement){
    products.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerText = element.item; 
        const button = document.createElement('button');
        button.setAttribute('data-id' , element.id );
        button.innerText = "Remove";
        card.appendChild(button);
        parentElement.appendChild(card) ; 
    });
    
}
appendCards(products , container);

container.addEventListener('click' , (event)=>{
    const id = event.target.dataset.id;
    products = products.filter(product => product.id !== id) ;
    container.innerHTML="";
    appendCards(products , container);
})

