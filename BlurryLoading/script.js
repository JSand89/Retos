const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

console.log(bg)
console.log(loadText)
// let load = 0
let cont=0
let int = setInterval(blurring, 100)


function blurring() {
    // console.log(cont)

     if(cont<100){
        cont++
       loadText.innerText = cont +"%"
    
     loadText.style.opacity = 1-cont/100
     let load=parseInt(30-(30*cont)/100);
     let co="blur("+load+"px)"
     bg.style.filter =co;
     console.log(co)

     }  
}  


   
 