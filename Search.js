const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const mensagem = document.getElementById("mensagem");

let segundox = 0;
let minutosx =0;
let horasx = 0;
let intervalo;

function iniciar(){
  clearInterval(intervalo)
  
 intervalo = setInterval(function(){
    if(segundox >=60){
      segundox =0
      minutosx++
    }else{
      segundox++
    }
    if(minutosx >59){
      minutosx =0
      horasx++
    }
    segundos.innerHTML = segundox.toString().padStart(2, "0");
    minutos.innerHTML = minutosx.toString().padStart(2, "0") + ":";
    horas.innerHTML = horasx.toString().padStart(2, "0") + ":";
  },1000)
}

function pausar(){
  clearInterval(intervalo);
}

function reiniciar(){
   segundox =0;
   minutosx = 0;
   horasx =0;
   segundos.innerHTML = 0;
   minutos.innerHTML = 0;
   horas.innerHTML = 0;
}


function infolorem(){
  let info =
  document.getElementById("info")
 let lorem = document.getElementById("lorem")
 
lorem.style.display="block";
setTimeout(function(){
  lorem.style.display="none";
},3000)
}

const mensagensTempo = [
  "O tempo é o recurso mais valioso que você possui. Use-o com sabedoria.",
  "Cada segundo é uma chance de mudar tudo.",
  "Não deixe que o tempo decida por você. Seja dono do seu momento.",
  "O futuro é moldado pelas decisões que você toma agora.",
  "Aproveite o tempo, ele não volta. Mas você pode recomeçar.",
  "Tudo tem seu tempo. A pressa rouba a beleza do processo.",
  "Quem aproveita o tempo, colhe resultados.",
  "O tempo não cura tudo, mas ensina a viver com sabedoria.",
  "Perder tempo é desperdiçar vida.",
  "Você não controla o tempo, mas controla como vive cada instante.",
  "Tempo bem usado é vida bem vivida.",
  "Viva o presente. Ele se chama presente por um motivo.",
  "A vida é curta demais pra ser adiada.",
  "Não espere por amanhã. O agora é a melhor hora pra começar.",
  "Tempo perdido é oportunidade desperdiçada.",
  "Grandes coisas levam tempo. Tenha paciência, mas não pare.",
];

function mudarmsg(){
  setInterval(function(){
  let escolher = mensagensTempo[Math.floor(Math.random() * mensagensTempo.length)];
    mensagem.innerHTML = escolher;
  },4000)
}
mudarmsg()

function tocar(){
  const musica = document.getElementById("musica")
  const instrucao = document.getElementById("instrucao").innerHTML="Clique duas vezes para parar"
musica.play()
}

function parar(){
  const musica = document.getElementById("musica")
  const instrucao = document.getElementById("instrucao").innerHTML="Clique uma vez para tocar"
musica.pause()
}



