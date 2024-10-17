const clothingStock = [
    {
      id: "1",
      color: "red",
      category: "men shirt",
      item: "Regular Fit Men Shirt",
      inStock: true
    },
    {
      id: "2",
      color: "green",
      category: "women shirt",
      item: "Slim Fit Women Shirt",
      inStock: true
    },
    {
      id: "3",
      color: "blue",
      category: "men shirt",
      item: "Oversized Men Shirt",
      inStock: false
    },
    {
      id: "4",
      color: "yellow",
      category: "men tshirt",
      item: "Regular Fit Men Tshirt",
      inStock: false
    },
    
    
   {
      id: "5",
      color: "magenta",
      category: "women jeans",
      item: "Ankle Lenght Women Jeans",
      inStock: true
    },
    {
      id: "6",
      color: "yellow",
      category: "men shirt",
      item: "Casual Fit Men Shirt",
      inStock: true
    },
    {
      id: "7",
      color: "green",
      category: "men jeans",
      item: "Carrot Fit Men Jeans",
      inStock: true
    },
    {
      id: "8",
      color: "red",
      category: "women shirt",
      item: "Casual Fit Women Shirt",
      inStock: false
    }
   ];

   console.log('all the women shirt color');
   clothingStock.forEach(({category , color ,id}) => category === 'women shirt' && console.log(id, ": " ,color))
   console.log('all the men shirt which are currenntly in storck');
   clothingStock.forEach(({category , color ,id , inStock}) => (category === 'men shirt' && inStock) && console.log(id, ": " ,color))

   console.log('all the elements which are in stock');
   const array = clothingStock.filter(({inStock})=> inStock);
   console.log(array);