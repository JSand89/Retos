const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {


    smallCups.forEach((cup, idx2) => { 
        console.log(idx)
        console.log(cup)
        idx>=idx2? cup.classList.add('full'):console.log(idx)
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
   // console.log(fullCups,'full')
    const totalCups = smallCups.length
    percentage.style.height=`${(fullCups/totalCups)*100}%`
    percentage.innerText=fullCups===0?'': `${(fullCups/totalCups)*100}%`
    console.log(remained.textContent,'remain')
    //console.log(listers.textContent,'lit')
    listers.textContent=totalCups===fullCups?'' :`${2-(fullCups/totalCups)*2}Lts`

    //fullCups===totalCups? 
    console.log(percentage)
}