/* declaração de variaveis */
let pipe = document.querySelector('.pipe');
let mario = document.querySelector('.mario');

/*  função para implementar a classe jump na img do mario */

let jump = ()  => {

  mario.classList.add('jump');
  setTimeout(() => {
    mario.classList.remove('jump');
  },500); 
}

/* funçao para identicar a posição do mario ao tubo */
let loop = setInterval (  () => {

  /* linha identifica a posição do pipe */
let  pipePosition = pipe.offsetLeft;
/* linha identifica a posição do mario */
let  marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

/* função para parar a animação quando for identificado os parametros acima */

if (pipePosition <= 120 && marioPosition < 80 &&  pipePosition > 0){
  pipe.style.animation = 'none';
  pipe.style.left = `${marioPosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  mario.src = "/assets/img/EvQit5UXEAM7gAe-removebg-preview.png"; 
  mario.style.width = '80px'
  mario.style.marginLeft = '2px'
  clearInterval(loop);
}
  }
)


document.addEventListener('keydown', jump);