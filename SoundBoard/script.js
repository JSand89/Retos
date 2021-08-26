//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio

const sounds=['applause','boo','gasp','tada','victory','wrong']
console.log(sounds)
sounds.forEach(sound=>{
    const btn=document.createElement('button')
        btn.classList.add('btn')
        btn.innerText=sound;
        btn.addEventListener('click',()=>{
            stop()
           //console.log('boo')
            document.getElementById(sound).play()
        })
        document.getElementById('buttons').appendChild(btn)
})
function stop(){
    sounds.forEach((sound)=>{
       const song= document.getElementById(sound)
        song.pause()
        song.currentTime=0
    })
}