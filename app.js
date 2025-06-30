gameSeq=[];
userseq=[];

let started=false;
let level=0;

let colors=["yellow","red","green","blue"];

let h2=document.querySelector("h2");

function checkAns(idx)
{
   
    if(userseq[idx]===gameSeq[idx])
    {
       if(userseq.length==gameSeq.length)
       {
        setTimeout(levelUp,1000);
       }
    }
    else{
        h2.innerHTML=`Game Over ! Your score is <b> ${level} </b> <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function()
    {
        document.querySelector("body").style.backgroundColor="white";

    },150);
        reset();
    }
}

document.addEventListener("keypress",function()
{
    
    if(started==false)
    {
        console.log("game started");
        started=true;
    }

    levelUp();
}
)

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash")
},150);
}

function userFlash(btn)
{
    btn.classList.add("userFlash");
    setTimeout(function()
{
    btn.classList.remove("userFlash")
},150);
}

function levelUp()
{
    userseq=[];
    level++;
    h2.innerText=`Level : ${level}`;

    let randomIdx=Math.floor(Math.random() * 3);

    let randomcolor=colors[randomIdx];

    let randomBtn=document.querySelector(`.${randomcolor}`)
    
    gameSeq.push(randomcolor);
    console.log(gameSeq);

    btnFlash(randomBtn);
}

function btnPressed()
{
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userseq.push(userColor);
   
     checkAns(userseq.length-1);
    
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPressed);
}

function reset()
{
    started=false;
    gameSeq=[];
    userseq=[];
    level=0;
}