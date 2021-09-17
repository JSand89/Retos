const labels = document.querySelectorAll('.form-control label')
console.log(labels)
labels.forEach(label => {
    aux= label.innerText.split('').map((letter, idx) =>{return `<span>${letter}</span>`})
    console.log(aux)
    baux=aux.join('')
    console.log(baux)
    label.innerHTML=baux
})

