const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('.fas')
console.log(contents,'content')
console.log(listItems,'items')
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        console.log(idx)
       item.classList.add('show')
       hideAllContents(idx)
       hideAllItems()

    })
})

function hideAllContents(id) {
    contents.forEach((item,idx)=>{
        console.log(idx,id,'ids')
        id===idx?item.classList.add('show'):item.classList.remove('show')
    })

}


function hideAllItems() {
    listItems.forEach((item)=>{
        item.classList.remove('active')
    })
   
}
