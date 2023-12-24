let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelectorAll("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count=0;
const winPattern =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

    const resetGame =() =>{
        turn0 =true;
        count=0;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
    

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if (turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
        checkWinner();
    });
});
const gameDraw =() =>{
    msg.innerText=`game is drawn`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};
const disabledBoxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const ShowWinner =(winner) =>{
msg.innerText=`Congratulations winnner is  ${winner}`;
msgContainer.classList.remove("hide");
disabledBoxes();
}
const checkWinner =() =>{
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                    
                    ShowWinner(pos1val);
                    return true;
            }
        }
    }
    
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



