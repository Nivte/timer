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
    const exactTime =
      now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    $box.appendChild($time);
    $time.innerHTML = exactTime;
  }, 1000);
}

clock();

let hours = 0;
let minutes = 0;
let seconds = 0;
let decimas = 0;

let num = 1;

let $time = 0;
let active = 0;

let field = "";

function start() {
  active = 0;

  if ($time == 0) {
    $time = document.createElement("p");
    field = document.createElement("div");
    field.style.backgroundColor = "yellow";
    field.style.marginBlock = "5vh";
    field.style.borderRadius = "10%";
    field.style.border = "solid black";
    field.style.marginLeft = "22vw";
    field.style.height = "25vh";
    field.style.width = "55vw";
    field.style.overflow = "scroll";
    document.body.appendChild(field);

    setInterval(() => {
      if (active == 0) {
        const now = new Date();
        const exactTime = hours + ":" + minutes + ":" + seconds + ":" + decimas;

        field.appendChild($time);
        $time.innerHTML = exactTime;


        decimas++;

        if (decimas === 10) {
          seconds++;
          decimas = 0;
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
      }
    }, 100);
  }
}

function stop() {
  let $stopped = document.createElement("p");
  field.appendChild($stopped);
  $stopped.innerHTML =
    hours + ":" + minutes + ":" + seconds + "." + (decimas - 1);
  $stopped.style.marginLeft = "40vw";
  $stopped.style.marginTop = "0vh";

  active = 1;
}

function reset() {
  active = 0;
  seconds = 0;
}

function deleteAll() {
  field.innerHTML = "";
}
