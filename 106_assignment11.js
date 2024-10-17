const app = document.getElementById('app');

function makeStar(input , parent){
    for(let i = 0 ; i < input ; i++){
        const star = document.createElement('span');
        star.classList.add('material-symbols-outlined', 'inactiveStar');
        star.innerText = 'star';
        star.setAttribute('data-id' , i+1) ;
        parent.appendChild(star);    
    }
}

makeStar(5 , app);

app.addEventListener('click' , (event)=>{
    const rating = event.target.dataset.id ;
    const stars = document.querySelectorAll('.inactiveStar');
    for(let i = 0 ; i<stars.length ; i++){
        stars[i].classList.remove('star');
    }
    for(let i = 0 ; i < rating ; i++){
        stars[i].classList.add('star');
    }
})