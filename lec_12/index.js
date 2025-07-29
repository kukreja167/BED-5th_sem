const res=document.querySelector("#color");
const btn=document.querySelector("#btn");
const stop=document.querySelector("#stop");
let colors=["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan", "teal", "violet", "brown", "gray", "black", "white"];
function getRandomColor() {
    const random=Math.floor(Math.random()* colors.length);
let color=colors[random];
    res.style.backgroundColor=color;
}
let id=null;
btn.addEventListener("click", function() {
    id=setInterval(()=>{
getRandomColor();
    },500);
});
stop.addEventListener("click", function() {
    if (id) {
        clearInterval(id);
    } 
});

