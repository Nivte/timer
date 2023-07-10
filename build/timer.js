let $box = document.getElementById("box");
$box.style.color = "black";
$box.style.borderRadius = "50%";
$box.style.border = "solid";
$box.style.textAlign = "center";
console.log($box);
let $p = document.createElement("p");
$box.appendChild($p);
function clock() {
    let $time = document.createElement("p");
    setInterval(() => {
        const now = new Date();
        const exactTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        $time.style.fontSize = "1.7rem";
        $box.appendChild($time);
        $time.innerHTML = exactTime;
    }, 1000);
}
clock();
let hours = 0;
let minutes = 0;
let seconds = 0;
let tenths = 0;
let num = 1;
let $time;
let active = 0;
let field;
function start() {
    active = 0;
    if (tenths === 0) {
        $time = document.createElement("p");
        field = document.createElement("div");
        field.style.backgroundColor = "#17B169";
        field.style.marginBlock = "5vh";
        field.style.borderRadius = "10%";
        field.style.border = "solid black";
        field.style.marginLeft = "22vw";
        field.style.height = "25vh";
        field.style.width = "55vw";
        field.style.overflow = "scroll";
        document.body.appendChild(field);
        const mediaQuery = window.matchMedia("(max-width:700px)");
        if (mediaQuery.matches) {
            field.style.width = "70vw";
            field.style.position = "absolute";
            field.style.top = "70vh";
            field.style.left = "-7.5vw";
        }
        setInterval(() => {
            if (active == 0) {
                const now = new Date();
                const exactTime = hours + ":" + minutes + ":" + seconds + ":" + tenths;
                field.appendChild($time);
                $time.innerHTML = exactTime;
                tenths++;
                if (tenths === 10) {
                    seconds++;
                    tenths = 0;
                }
                if (seconds === 60) {
                    minutes++;
                    seconds = 0;
                }
                if (minutes === 60) {
                    hours++;
                    minutes = 0;
                }
                $time.style.marginLeft = "25vw";
                $time.style.fontSize = "3vh";
            }
        }, 100);
    }
}
function stop() {
    let $stopped = document.createElement("p");
    field.appendChild($stopped);
    $stopped.innerHTML =
        hours + ":" + minutes + ":" + seconds + "." + (tenths - 1);
    $stopped.style.marginLeft = "40vw";
    $stopped.style.marginTop = "0vh";
    $stopped.style.color = "red";
    $stopped.style.fontWeight = "600";
    $stopped.style.fontSize = "3vh";
    active = 1;
}
function reset() {
    active = 0;
    seconds = 0;
}
function deleteAll() {
    field.innerHTML = "";
}
