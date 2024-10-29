let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msg=document.querySelector(".hide");
let new_game=document.querySelector(".new-game")

let turnO=true;
const winning_condition=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

new_game.addEventListener("click",()=>{
    turnO=true;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    msg.classList.add("hide");
})

reset.addEventListener("click",()=>{
    turnO=true;
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }

})

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O" 
            turnO=false
        }else{
            box.innerText="X" 
            turnO=true
        }
        box.disabled=true

        checkwinner();
    })

});

let checkwinner=()=>{
    let isDraw=true;
    for(let pattern of winning_condition){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    
    if(pos1!=="" && pos2!=="" && pos3!==""){
        if(pos1===pos2 && pos2===pos3){
            showwinner(pos1);
            }
        }
    }

    for (const box of boxes) {
        if(box.innerText===""){
            isDraw=false;
            break;
        }
    }

    if (isDraw) {
        showDraw();
    }
}

let boxdisabled = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

let showwinner=(winner)=>{
    msg.innerText=`Congratulations ! Winner is ${winner}`
    msg.style.color="#002D8D"
    msg.style.fontSize="2rem"
    msg.classList.remove("hide")
    boxdisabled();
}

let showDraw=()=>{
    msg.innerText="Game Was Draw!!"
    msg.style.color="#002D8D"
    msg.style.fontSize="2rem"
    msg.classList.remove("hide")
    boxdisabled();
}