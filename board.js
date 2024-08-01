const sizes = document.getElementsByClassName('sizes')
const board = document.getElementById('board')
let trues = 0
Array.from(sizes).forEach(element => {
    element.addEventListener('click',()=>{
        board.innerHTML=''
        let c = Number(element.textContent)
        let b = Math.floor(700/c)
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
let scolor;
let colour = document.getElementsByClassName('colour')
Array.from(colour).forEach(color =>{color.addEventListener('click',()=>{
    scolor=color.textContent


})})
board.addEventListener('mousedown',(e)=>{
    if(e.target.matches('.inner')){
        trues = 1
        e.target.style.backgroundColor = scolor;
    }

})
board.addEventListener('mousemove',(e)=>{
    if((e.target.matches('.inner')) && (scolor!=='ereser') && (trues==1)){
        e.target.style.backgroundColor=scolor
    }
    else if((e.target.matches('.inner')) && (scolor=='ereser') && (trues==1)){
        e.target.style.backgroundColor='white'
    }


})
board.addEventListener('mouseup',(e)=>{
    if(e.target.matches('.inner')){
        trues = 0
    }

})


