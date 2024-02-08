let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// for considering the alternative turns 
let turnO = true; // player O
// let turnX = false; //player X
// we have to store the winning patterns for that we can go with arrays (2-D)
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let cnt = 0;

 const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    cnt=0;
 };

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            // player O
            box.innerText = "O";
            box.classList.add("o-turn"); // Apply the class for O turn
            box.classList.remove("x-turn"); // Remove the class for X turn
            turnO = false;
        } else {
            // player X
            box.innerText = "X";
            box.classList.add("x-turn"); // Apply the class for X turn
            box.classList.remove("o-turn"); // Remove the class for O turn
            turnO = true;
        }
        cnt += 1;
        box.disabled = true;

        checkWinner();

        if (cnt === 9 && msgContainer.classList.contains("hide")) {
            msg.innerText = "Draw, please click on the new button";
        }
    });
});
    

// const draw = () =>{
//     console.log("Draw , please click on new button");
// }

const disableBoxes  = ()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes  = ()=>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");   // what is the role of hide in
    disableBoxes();

    // if(cnt==9){
    //     msg.innerText = "Draw, please click on new game button";
    // }
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
      let post1Val = boxes[pattern[0]].innerText;
      let post2Val = boxes[pattern[1]].innerText;
      let post3Val = boxes[pattern[2]].innerText;

      if(post1Val!="" && post2Val!= "" && post3Val!=""){
        if(post1Val == post2Val && post2Val == post3Val){
            showWinner(post1Val);
        }
      }
    }
};


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);  // we can reset the game in an intermediates states 



// HW
//1.changes the color of the o and x (means both have different color when they clicked)
//2.leetcode problem 1275 
//3.if all boxes are selected there is no winner print the message "Draw , please click on new game"