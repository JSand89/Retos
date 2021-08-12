const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    
    console.log(window.innerHeight / 5 * 4)
    
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom)

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop)
         
        
    })
    
}