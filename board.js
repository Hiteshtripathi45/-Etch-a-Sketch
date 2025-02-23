const sizes = document.getElementsByClassName('sizes')
const board = document.getElementById('board')
let trues = 0
Array.from(sizes).forEach(element => {
    element.addEventListener('click',()=>{
        board.innerHTML=''
        let c = Number(element.textContent)
        let b = Math.floor(400/c)
        for(let i=0;i<c*c;i++){
        const inner = document.createElement('div')
        inner.className = 'inner'
        inner.style.width = `${b}px`
        inner.style.height = `${b}px`
        inner.style.backgroundColor='white'
        board.appendChild(inner)


        }

    })
   
    
});
let colour = '#000000'
const scolor = document.getElementById('colourpicker')
scolor.addEventListener('input',()=>{
    colour=scolor.value;
    console.log(colour)
})

board.addEventListener('mousedown',(e)=>{
    if(e.target.matches('.inner')){
        trues = 1
        e.target.style.backgroundColor = colour;
    }

})
board.addEventListener('mousemove',(e)=>{
    if((e.target.matches('.inner')) && (trues==1)){
        e.target.style.backgroundColor=colour
    }



})
board.addEventListener('mouseup',(e)=>{
    if(e.target.matches('.inner')){
        trues = 0
    }

})


