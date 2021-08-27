const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        //revisar 
      console.log(x,y);

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        console.log(buttonTop,buttonLeft);

        const xInside = x - buttonLeft
        const yInside = y - buttonTop

        console.log(xInside,yInside);
       let circle=document.createElement('div')
       button.appendChild(circle)
       circle.style.left=xInside +'px'
       circle.style.top=yInside+'px'

       circle.classList.add('circle')


    })
})