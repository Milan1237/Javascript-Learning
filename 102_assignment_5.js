const para = document.getElementById('para');

para.innerHTML = para.innerText.split(' ').map(word=>{
    return word.length  > 7 ? `<span class = 'bgRed'> ${word}</span>`
    : word.length > 5 ? `<span class = 'bgGreen'> ${word}</span>` : word ;
}).join(' ');