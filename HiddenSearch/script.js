const btnSearch = document.getElementById('btnSearch')
const input=document.querySelector('input')
btnSearch.addEventListener('click',() =>{

    input.classList.toggle('active')
     btnSearch.classList.toggle('active') // funciona como un switch el toogle
    console.log(btnSearch)
})
