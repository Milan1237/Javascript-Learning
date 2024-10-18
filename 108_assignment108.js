const initialData = [
    {
      id: 1,
      item: "shirt",
      price: 300
    },
    {
      id: 2,
      item: "tshirt",
      price: 499
    },
    {
      id: 3,
      item: "jeans",
      price: 500
    },
    {
      id: 4,
      item: "trousers",
      price: 250
    },
    {
      id: 5,
      item: "chinos",
      price: 300
    }
   ];

const hightToLow = document.getElementById('hl');
const LowToHigh = document.getElementById('lh');
const productsContainer = document.querySelector('.products');

function appendCarts(initialData){
for(let element of initialData){
    const product = document.createElement('p');
    product.innerText = `${element.id}:: name: ${element.item} :: price ${element.price}`
    productsContainer.appendChild(product);
}
}

appendCarts(initialData);

hightToLow.addEventListener('click' , (event)=>{
    const array = initialData.sort(({price: price1} , {price: price2})=> price2 - price1) ;
    productsContainer.innerHTML = '';
    appendCarts(array);
});

LowToHigh.addEventListener('click' , (event)=>{
    const array = initialData.sort(({price: price1} , {price: price2})=> price1 - price2) ;
    productsContainer.innerHTML = '';
    appendCarts(array);
});
