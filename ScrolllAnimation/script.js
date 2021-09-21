const boxes = document.querySelectorAll('.box')
//console.log(boxes)

window.addEventListener('scroll', checkBoxes)

//checkBoxes()

function checkBoxes() {
    console.log(window.innerHeight / 5 * 4)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        const triggerBottom = window.innerHeight/ 5 * 4
        console.log(boxTop,'boxtop',triggerBottom,'triger') 
        if(triggerBottom>boxTop) {
       box.classList.add('show')
       console.log('if')
       }else{
           box.classList.remove('show')
       }
     
         //usar un if para comprobar donde esta si esta dentro de la ventana si esta cambiarle el estado al .show
        
    })
    
}