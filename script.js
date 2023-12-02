var hit=0;
var time=60;
var score=0;
let btn = document.querySelector("#btn");
let panel = document.querySelector(".panel");
let btmpanel = document.querySelector(".pbtm");
panel.style.pointerEvents = "none";
function genBubbles(){
var clutter = '';

for(i=1; i<=152; i++){
      var rn = Math.floor(Math.random()*10.2);
      clutter += `<div id="bubble" style="background-color:${'#' + (Math.random()*0xAFAFAF<<0).toString(16)}; transition: 0.9s">${rn}</div>`;
}
document.querySelector('.pbtm').innerHTML = clutter;

}
function setTimeout(){
      var timeout = setInterval(() => {
            if(time>0)
            {
            time--;
            document.querySelector("#timeVal").textContent = time;
            }
            else
            {
                  clearInterval(timeout);
                  btmpanel.innerHTML = `<div style="font-size:85px; text-align: center; position: absolute; top: 50%;  left: 50%; transform: translate(-50%,-50%);">Game Over!<br>You've scored ${score}</div>`;
                  let resetBtn = document.querySelector(".btn");
                  resetBtn.style.opacity = "1"
                  resetBtn.addEventListener('click',()=>{
                        resetBtn.style.opacity = "0"
                        window.location.reload();
                  });
            }
      }, 1000);
}
btn.addEventListener('click',()=>{
      genHit();
      setTimeout();
      btn.innerText = "Started!"
      panel.style.pointerEvents = "all";
     setInterval(()=>{
      btn.style.visibility = "hidden"
      btn.style.opacity= '0';
     },500)
})
function genHit(){
      hit = Math.floor(Math.random()*10);
      var hitRn = document.querySelector("#hitVal").textContent = hit;
}
function upgradeScore(){
      score += 5;
      document.querySelector("#scoreVal").innerText = score;
}
panel.addEventListener('click',(e)=>{
      var clickedBubble = Number(e.target.innerText);
      console.log(clickedBubble)
      console.log(hit)
      if(clickedBubble === hit){
            upgradeScore()
            genBubbles()
            genHit()
      }
})
genBubbles();
genHit();