const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    console.log('haciendo click')
    console.log(getRandomMessage())
    let mes=messages[id]

}

function getRandomMessage() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
     let id=getRandomInt(0,4)
     return (id)
}

function getRandomType() {
    
}