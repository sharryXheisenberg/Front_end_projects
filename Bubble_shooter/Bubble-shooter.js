var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
    var clutter = '';
    for (var i = 1; i <= 102; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    var pbtmElement = document.querySelector("#pbtm");
    if (pbtmElement) {
        pbtmElement.innerHTML = clutter;
    } else {
        console.error("Element with ID 'pbtm' not found.");
    }
}

function runTimer() {
   var timerinterval =  setInterval(function () {
        if(timer>0){
            timer--;
         document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerinterval);
    }
}, 1000);
}

function gethit(){
    hitrn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum == hitrn){
        increaseScore();
        makeBubble();
        gethit();
    }
});


runTimer();
makeBubble();
gethit();

// game idea 
// the bubble will hit when that particular number appears in the hit box and after hitting the correct bubble score will increase by 10 and timer 
// goes from 60 sec to 0 sec

