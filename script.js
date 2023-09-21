// const { reset } = require("nodemon")

console.log("Welcome to my tic tac toe Game")
let turn ="X"
let isGameOver=false

// TO CHANGE TURN 
const changeTurn=()=>{
return turn==="X"?"O":"X"
}

// TO CHECK THE WIN
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
let wins=[
    [0,1,2,4,5,0],
    [3,4,5,3,15,0],
    [6,7,8,4,26,0],
    [0,3,6,-7,16,90],
    [1,4,7,3,15,90],
    [2,5,8,13,15,90],
    [0,4,8,4,17,45],
    [2,4,6,5,15,135]
]

wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!==""))
    {
        document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won"
        isGameOver=true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="300px"
        document.querySelector(".line").style.width="375px"
        document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
     }
})
}


// GAME LOGIC
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText==='')
        {
            boxtext.innerText=turn
            turn =changeTurn()
            checkWin()
            if(!isGameOver)
            {
                document.getElementsByClassName("info")[0].innerText="Turn for "+turn
            }            
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isGameOver=false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})