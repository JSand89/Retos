const left =document.querySelectorAll('.left')
const right =document.querySelectorAll('.right')

console.log(left,'left',right,'rgt')

left[0].addEventListener('mouseenter',e =>{
    console.log('left')
    right[0].classList.remove('active')
    right[0].classList.add('inactive')
    left[0].classList.remove('inactive')
    left[0].classList.add('active')
})
right[0].addEventListener('mouseenter', e=>{
    console.log(e)
    right[0].classList.remove('inactive')
    right[0].classList.add('active')
    left[0].classList.remove('active')
    left[0].classList.add('inactive')
    console.log(right[0])
})