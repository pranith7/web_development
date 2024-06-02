const start = document.getElementById('start');
const stop  = document.getElementById('stop');

let intervalid;

function changeBg() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(`changing backgroundcolor with ${randomColor}`);
    document.body.style.backgroundColor = "#" + randomColor;
};

start.addEventListener("click", function(){
    intervalid = setInterval(changeBg, 1000);
    console.log(`changing backgroung color with ${intervalid}`);

});
stop.addEventListener("click", function(){
    console.log(`Clicked stop button ${intervalid}`)
    clearInterval(intervalid);
});