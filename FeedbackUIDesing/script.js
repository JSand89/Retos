const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelector('.panel-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
console.log(ratingsContainer)
console.log(panel)
console.log(sendBtn)
console.log(ratings)

ratingsContainer.addEventListener('click', (e) => {
    console.log(e)
    if(e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})


sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `<strong>Gracias por su Opinión</strong>`
})

function removeActive() {
    for(i=0;i<3;i++){
   
        ratings[i].classList.remove('active')
    }
}