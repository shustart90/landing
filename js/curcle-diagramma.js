let circle_1 = document.getElementById("ring-circle-1");
let circle_2 = document.getElementById("ring-circle-2");
let circle_3 = document.getElementById("ring-circle-3");
let r = 60;
let long = 2 * Math.PI * r;

circle_1.style.strokeDasharray = `${long} ${long}`;
circle_1.style.strokeDashoffset = long;
circle_2.style.strokeDasharray = `${long} ${long}`;
circle_2.style.strokeDashoffset = long;
circle_3.style.strokeDasharray = `${long} ${long}`;
circle_3.style.strokeDashoffset = long;
function setProgress(elem) {
    let perc = elem.parentElement.parentElement.firstElementChild.firstElementChild.innerText
    let perc2 = +perc.substring(0, perc.length - 1);
    console.log(perc2);
    let offset = long - perc2/100 * long;
    elem.style.strokeDashoffset = -offset;
}

setProgress(circle_1);
setProgress(circle_2);
setProgress(circle_3);

