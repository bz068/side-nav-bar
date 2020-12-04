

const container = document.querySelector('.container');
const barsBtn = document.querySelector('.barsBtn');
const closeBtn = document.querySelector('.closeBtn');


console.log(container.classList);

barsBtn.addEventListener('click', ()=>{
    container.classList.toggle('container-show')
})

closeBtn.addEventListener('click', ()=> container.classList.remove('container-show'))

