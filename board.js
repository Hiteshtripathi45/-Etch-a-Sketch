const sizes = document.getElementsByClassName('sizes')
const board = document.getElementById('board')
const size = document.getElementById('size')
const rangename = document.getElementById('rangename')
let trues = 0

    size.addEventListener('click',()=>sizeselector(size.value))
   
 
function sizeselector(value){
    board.innerHTML=''
    let c = Number(value)
    let b = (500/c)
    for(let i=0;i<c*c;i++){
    const inner = document.createElement('div')
    inner.className = 'inner'
    inner.style.width = `${b}px`
    inner.style.height = `${b}px`
    inner.style.backgroundColor='white'
    board.appendChild(inner)
   }
   rangename.textContent=`${c} x ${c}`


}    
sizeselector(size.value)

let colour = '#000000'
const scolor = document.getElementById('colourpicker')
scolor.addEventListener('input',()=>{
    colour=scolor.value;
    console.log(colour)
})

scolor.addEventListener('click',()=>{
    rain=false
})

board.addEventListener('mousedown',(e)=>{
    if(e.target.matches('.inner')){
        trues = 1
        e.target.style.backgroundColor = colour;
    }

})
board.addEventListener('mousemove',(e)=>{
    if((e.target.matches('.inner')) && (trues==1)){
        if(rain==false){
            e.target.style.backgroundColor=colour
        }
            else{
                e.target.style.backgroundColor=getRandomColor()
            }
    }



})
board.addEventListener('mouseup',(e)=>{
    if(e.target.matches('.inner')){
        trues = 0
    }

})


document.getElementById('eraser').addEventListener('click',()=>{colour='#FFFFFF', rain = false;})
document.getElementById('clear').addEventListener('click',()=>{sizeselector(size.value)})


function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let rain = false
document.getElementById('rainbow').addEventListener('click',()=>{rain=true})
