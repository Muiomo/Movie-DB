//const q = prompt("Digite o nome do filme");
function Pesquisar(){
const nomeFilme = document.getElementById("nomeFilme").value;
const info = document.getElementById("info");
const cartaz =document.getElementById("cartaz");

const pesquisar =(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(nomeFilme)}&language=pt-BR
`);

fetch(pesquisar)
.then(respostas => respostas.json())
.then(dados => {
  if(dados.results.length >0){
  let detalhes = dados.results[0];
console.log(detalhes)
info.innerHTML=`
<strong>TÍTULO:</strong>${detalhes.title}\n<br>
<strong>ANO DE LANÇAMENTO:</strong>${detalhes.release_date}\n<br>
<strong>CLASSIFICAÇÃO:</strong> ${detalhes.vote_count}\n<br>
<strong>SINOPSE:</strong> ${detalhes.overview}\n
`
cartaz.src=`https://image.tmdb.org/t/p/w500${detalhes.poster_path}`
//cartaz.src=`https://image.tmdb.org/t/p/w500${detalhes.backdrop_path}`
  }else{
   info.innerHTML ="Filme não encontrado";
  }
})
.catch(erro => console.error("Algo deu errado!",erro))
}
