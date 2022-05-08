var div = document.getElementById("notice");
div.innerHTML = '\
<center>\
<img class="maintain-img" draggable="false" src="img/maintain.png"><br>\
<div class="maintain-body">\
Opps! we are under maintainance, try again later.\
</div>\
</center> ';
        var div = document.getElementById("navbar");
div.innerHTML = '\
          <nav class="navbar">\
          <!-- <div class="brand-name">\
              <a class="br-name">Group - 3</a>\
          </div> -->\
          <ul>\
              <li class="nav-link" onclick="info()">\
                  <a class="link"> <i class="fa fa-info-circle nav-ic"></i>\
                    <span class="nav-strg">Info</span>\
                  </a>\
              </li> \
              <li class="nav-link" onclick="pricing()">\
               <a class="link"> <i class="fa fa-dollar-sign nav-ic"></i>\
                   <span class="nav-strg">Pricing</span>\
                 </a>\
           </li> \
              <li class="nav-link" onclick="generations()">\
                  <a class="link"> <i class="fa fa-bus nav-ic"></i>\
                      <span class="nav-strg">Generations</span>\
                    </a>\
              </li>\
              <li class="nav-link" onclick="home()">\
                  <a class="link"> <i class="fa fa-home nav-ic"></i>\
                      <span class="nav-strg">Home</span>\
                    </a>\
              </li>\
          </ul>\
        </nav> ';
var div = document.getElementById("explore");
div.innerHTML = '\
        <center>\
        <div class="ex-container">\
            <h3> <i class="fa fa-compass"></i> Explore</h3>\
            <div class="explore" onclick="home()">\
                Home\
            </div>\
            <div class="explore" onclick="generations()">\
                Car Generations\
            </div>\
            <div class="explore" onclick="pricing()">\
                Car Pricing\
            </div>\
            <div class="explore" onclick="pricing()">\
                Info\
            </div>\
        </div>\
        </center> ';

function home() {
    window.location.href = "index.html";
}

function generations() {
    window.location.href = "generations.html";
}

function expanded() {
    window.location.href = "expanded.html";
}

function pricing() {
    window.location.href = "pricing.html";
}

function models() {
    window.location.href = "https://www.jaguar.com/jaguar-range/index.html";
}

function info() {
    window.location.href = "info.html";
}

function jaguarInfo() {
    window.location.href = "https://en.wikipedia.org/wiki/Land_Rover";
}
var name = "Om Lokhande | Akash Mhais | Prashant Londhe | Ruchika Mapari";
var roll = "73, 74, 75, 76";
var branch = "Mechanical";
var img = "img/3.jpg";
// img.setAttribute("src", "img/ds.jpg");
document.getElementById("grp-img").innerHTML = '<img src="' + img + '" class="grp-img">';
document.getElementById("grp-nme").innerHTML = name;
document.getElementById("grp-roll").innerHTML = roll;
document.getElementById("grp-brh").innerHTML = branch;

function stats() {
    var x = document.getElementById("stats");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}