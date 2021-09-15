const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    let cont=0

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        //console.log(typeof target, target)
        if(cont<target){
            cont++
           counter.innerText = cont
        }
    }
    setInterval(updateCounter,10)

    updateCounter()
})