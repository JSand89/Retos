const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let activeSlide = 0;
console.log(slides[activeSlide])


rightBtn.addEventListener('click', () => {
  slides[activeSlide].classList.remove('active')
  activeSlide++
// console.log(slides.length)
//console.log(activeSlide == slides.length)
  if (activeSlide == slides.length) {
    activeSlide = 0
  }
  slides[activeSlide].classList.add('active')
console.log(activeSlide)
  setBgToBody()
 // setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  slides[activeSlide].classList.remove('active')
  activeSlide--

  if (activeSlide == -1 ) {
    activeSlide = slides.length-1 
    //console.log(slides.length)
  }
  slides[activeSlide].classList.add('active')
  console.log(activeSlide)
  setBgToBody()
  //setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// function setActiveSlide() {
//  slides[activeSlide].classList.remove('active')
//  slides[activeSlide].classList.add('remove')
// }