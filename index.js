let boxes = document.querySelectorAll(".box");

let resetbtn = document.querySelector("#resetbtn");
let newbutton = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame =  () => {
    
    turnO = true;
    enableBoxes();
    msgcontainer.style.display = "none";
    newbutton.style.display = "none";
    resetbtn.style.display = "none";
};








boxes.forEach((box) => {
    box.addEventListener("click", () => {

       
        if (turnO) {
            box.innerText = "O";
            turnO = false;

        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
})
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
        
    }
}
const showwinner = (winner) => {
    msg.innerText = `${winner} has won!!!`;
    msgcontainer.style.display = "block";
    newbutton.style.display = "block";
    resetbtn.style.display = "block";
    disabledBoxes();
}


const checkwinner = () => {
    for (let pattern of winpattern) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval3 === posval1) {
              
                showwinner(posval1);
            }
        }
    }
};

newbutton.addEventListener("Click",resetgame);
resetbtn.addEventListener("Click",resetgame);
