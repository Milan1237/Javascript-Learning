const images = document.querySelectorAll('.image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
images.forEach((image,index)=>{
    image.style.transform = `translateX(${(index * 100)}%)`
    
}) ;

const maxLength = images.length - 1  ;
let currentImage = 0 ;

next.addEventListener('click' , (event)=>{
    console.log('event fired')
    if(currentImage == maxLength){
        currentImage = 0 ;
    }else{
        currentImage++ ;
    }

    images.forEach((image, index) => image.style.transform = `translateX(${(index - currentImage)*100}%)`)

    
})
prev.addEventListener('click' , (event)=>{
    if(currentImage == 0){
        currentImage = 0 ;
    }else{
        currentImage-- ;
    }

    images.forEach((image, index) => image.style.transform = `translateX(${(index - currentImage)*100}%)`)

    
})
