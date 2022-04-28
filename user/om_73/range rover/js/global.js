
function home(){window.location.href = "index.html";}
function generations(){window.location.href = "generations.html";}
function expanded(){window.location.href = "expanded.html";}
function models(){window.location.href = "https://www.jaguar.com/jaguar-range/index.html";}
function info(){window.location.href = "info.html";}
function jaguarInfo(){window.location.href = "https://en.wikipedia.org/wiki/Land_Rover";}

var name = "Om Lokhande | Akash Mhais | Prashant Londhe | Ruchika Mapari";
var roll = "73, 74, 75, 76";
var branch = "Mechanical";
var img = "img/demo.png";
// img.setAttribute("src", "img/ds.jpg");
document.getElementById("grp-img").innerHTML = '<img src="' + img + '" class="grp-img">';
document.getElementById("grp-nme").innerHTML = name;
document.getElementById("grp-roll").innerHTML = roll;
document.getElementById("grp-brh").innerHTML = branch;


var title = "Name";
document.getElementById("pg-title").innerHTML = title;