const insert = document.getElementById('insert')
const key =document.querySelectorAll('.key')
console.log(insert)
console.log(key)
console.log(key[0].textContent)
window.addEventListener('keydown', (event) => {
  console.log(event.key,event.code,event.keyCode);
  console.log(event)
  key[0].textContent=event.keyCode===32? 'Space':event.key
  key[1].textContent=event.keyCode
  key[2].textContent=event.code
})


