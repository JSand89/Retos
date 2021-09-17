const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []
//https://randomuser.me/api?results=50
//https://randomuser.me/documentation#intro
//getData()

filter.addEventListener('input', (e) => 
//console.log(e.target.value))
filterData(e.target.value))


async function generateUsers(){
res = await fetch('https://randomuser.me/api/',{
    headers:{
        'Accept':'application/json'
      }
    }) 
   //console.log(res)
    
  const data = await res.json()
  console.log(data.results[0].name.first)
  let listElemnt=document.createElement("li")
  let Content=document.createTextNode(data.results[0].name.first)
  listElemnt.appendChild(Content)
  result.appendChild(listElemnt)
 


}       

generateUsers()
// function getData() {
//     //const res = 

//    // const {  } = json()

//     // Clear result
//     result.innerHTML = ''

//     (user => {
//         const li = document.createElement('li')

//         listItems.push(li)

//         li.innerHTML = `
 
//         `

//         result.appendChild(li)
//     })
// }

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}