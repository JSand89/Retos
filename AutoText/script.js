const textEl = document.getElementById('text'); 
let speed =document.getElementById('speed');
console.log(textEl.innerText.length)// tambien funciona con textContent que es como aparece en la propiedad en la consola, vamos a usar inneText que es el que usan en el programa si me acuerdo preguntar por que
console.log(speed.value);
const word=textEl.innerText;
textEl.innerText='';
var contador =0;
let timeStep= speed.value*1000;
speed.addEventListener("change", ()=> { timeStep= speed.value*1000;})

setInterval(writeText,timeStep);
function writeText(){
  console.log(timeStep);
  console.log(contador)
  textEl.innerText = textEl.innerText+(word[contador])
  contador++
  if(contador > word.length) {
    textEl.innerText = '';
      contador = 0;
      console.log(contador)
    }
}
// addEventListener(" ",writeText())

//  const speedEl('', { => addEventListener('', (e) =>{ writeText()})}) 