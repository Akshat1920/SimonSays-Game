let gameSeq = [];
let userSeq = [];
let gameStart = false;
let level = 0;
let btns = ["red" , "yellow" , "green" , "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(gameStart == false){
        console.log("start")
        gameStart = true;
        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(() => {
        btn.classList.remove("gameflash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++ ;

    h2.innerHTML = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameflash(randBtn);
}

function resetgame() {
    gameSeq = [];
    userSeq = [];
    gameStart = false;
    level = 0;
}
function checkans (idx) {
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML = `Game Over!!! Your Score ${level} <br> Press Any Key To Restart`;
        resetgame();

        let body = document.querySelector("body");
        body.style.backgroundImage = 'url("red.avif")';
        setTimeout(() => {
            body.style.backgroundImage = 'url("bg3.avif")';
        }, 100);
    }
}
function btnpress () {
    let btn = this;
    userflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkans(userSeq.length-1);
 
}

let allbtns = document.querySelectorAll(".btn");

for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

