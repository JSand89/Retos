const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

//  Probar 
loveMe.addEventListener('dblclick', (e) => {
    console.log('123')
} ) 


loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            //console.log(123);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})


const createHeart = (e) => {
    const x = e.clientX
    const y = e.clientY

    //revisar 
 // console.log(x,y);

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

   // console.log(buttonTop,buttonLeft);

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    //console.log(xInside,yInside);
   let circle=document.createElement('i')
   loveMe.appendChild(circle)
   circle.style.left=xInside +'px'
   circle.style.top=yInside+'px'
   circle.classList.add('fas')
   circle.classList.add('fa-heart')
   timesClicked=timesClicked+1
   console.log(timesClicked)
   times.textContent=timesClicked
   console.log(times.textContent)

}