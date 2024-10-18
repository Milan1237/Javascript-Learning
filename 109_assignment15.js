let initialData = [
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


const productsContainer = document.querySelector('.products');
const form = document.getElementById('form');
function appendCarts(initialData) {
    productsContainer.innerHTML = "";
  for (let element of initialData) {
    const product = document.createElement('p');
    product.innerText = `${element.id}:: name: ${element.item} :: price ${element.price}`
    productsContainer.appendChild(product);
  }
}
appendCarts(initialData);

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const formData = new FormData(form);
    const id = formData.get('id');
    const price = formData.get('price');
    initialData = initialData.map(data =>{
        return  data.id == id ? {...data , price: price} : data ;
    })
    appendCarts(initialData);
})







