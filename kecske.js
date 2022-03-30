window.addEventListener("load", init)

function $(elem) {
    return document.querySelector(elem);
}

function ID(elem) {
    return document.getElementById(elem);
}
function init () {
    $("footer p").innerHTML = "Vetési György Ádám";
    ID("csonak").innerHTML = "<img src=kepek/csonak.png alt=csonak>"
    $("footer p").style.testAlign = "center"
    $("footer p").style.fontSize = "20px"
}
