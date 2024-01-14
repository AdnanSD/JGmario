// Adicionar um final 


// som efeito final
const somFim=new Audio('somover.mp4')

const somf=()=>{

  somFim.play();
}


// função do efeito do pulo

const somPulo=new Audio('som.m4a')
const efeitoSonoro=1.5; 

somPulo.playbackRate=efeitoSonoro;

const som=()=>{




somPulo.play();

} 




const mario=document.querySelector('.mario');
const pipe=document.querySelector('.pipe');
const gamePlano=document.querySelector('.game-board')


//pontuação do jogador   
const pointMario=document.getElementById('contador');

let pontuacao;
let segundosVivos=0;

function atualizarPontuacao(){
pointMario.innerText=`${segundosVivos}`

}
// pontuação do usuario
function iniciarPontuacao() {
    pontuacao = setInterval(function () {
      segundosVivos++;
      atualizarPontuacao();
      veloz();
    }, 100);




  }


// pulo do personagem

const jump =()=>{

mario.classList.add('jump')


setTimeout(()=>{
    mario.classList.remove('jump')

},500)


}

// Velocidade do pipe

function definirVelocidade(velocidade) {
  // Remova classes de velocidade existentes
  pipe.classList.remove('velocidade-normal', 'velocidade-rapida');

  // Adicione a classe correspondente à nova velocidade
  pipe.classList.add(`velocidade-${velocidade}`);


}

// Exemplo: Defina a velocidade para 'normal' após 2 segundos
setTimeout(() => {
  definirVelocidade('normal');
}, 2000);

// Exemplo: Defina a velocidade para 'rápida' após 5 segundos
setTimeout(() => {
  definirVelocidade('rapida');
}, 5000);







// Função referente ao criterio de colição 
const loop= setInterval( ()=>{

const pipePosition=pipe.offsetLeft;
const marioPosition=+window.getComputedStyle(mario).bottom.replace('px', '')




console.log(marioPosition);


if(pipePosition<=120 && pipePosition >0 && marioPosition<100){

  
gamePlano.classList.add('transicao-background');

// Remove a classe após um pequeno atraso para permitir a execução da transição

    pipe.style.animation='none'
    pipe.style.left=`${pipePosition}px`

    mario.style.animation='none'
    mario.style.bottom=`${marioPosition}px`
    mario.src='game-over.png'
    mario.style.width='75px'
    mario.style.marginLeft = '50px';
    somf();
    clearInterval(pontuacao)

    // pipe.classList.remove('velocidadeAplicada');
    clearInterval(loop)
}

},10);

 iniciarPontuacao();

function clicar(){
    jump();
    som();
}


// document.addEventListener('keydown', () => {
    
   
//   });