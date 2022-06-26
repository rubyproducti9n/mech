var div = document.getElementById("loading").innerHTML = ' <img id="loading-image" src="img/load.jpg" alt="Loading..." /> ';

function home() {
    window.location.href = "index.html"
}

function generations() {
    window.location.href = "generations.html"
}

function expanded() {
    window.location.href = "expanded.html"
}

function pricing() {
    window.location.href = "pricing.html"
}

function models() {
    window.location.href = "https://www.jaguar.com/jaguar-range/index.html"
}

function info() {
    window.location.href = "info.html"
}

function jaguarInfo() {
    window.location.href = "https://en.wikipedia.org/wiki/Land_Rover"
}
$(window).on("load", (function() {
    $("#loading").hide().delay(9e3)
})), (div = document.getElementById("notice")).innerHTML = '<center><img class="maintain-img" draggable="false" src="img/maintain.png"><br><div class="maintain-body">Oops! we are closed, try again later.</div></center> ', (div = document.getElementById("navbar")).innerHTML = '          <nav class="navbar">          \x3c!-- <div class="brand-name">              <a class="br-name">Group - 3</a>          </div> --\x3e          <ul>              <li class="nav-link" onclick="info()">                  <a class="link"> <i class="fa fa-info-circle nav-ic"></i>                    <span class="nav-strg">Info</span>                  </a>              </li>               <li class="nav-link" onclick="pricing()">               <a class="link"> <i class="fa fa-dollar-sign nav-ic"></i>                   <span class="nav-strg">Pricing</span>                 </a>           </li>               <li class="nav-link" onclick="expanded()">                  <a class="link"> <i class="fa fa-tachometer-alt nav-ic"></i>                      <span class="nav-strg">Expanded</span>                    </a>              </li>              <li class="nav-link" onclick="home()">                  <a class="link"> <i class="fa fa-home nav-ic"></i>                      <span class="nav-strg">Home</span>                    </a>              </li>          </ul>        </nav> ', (div = document.getElementById("explore")).innerHTML = '        <center>        <div class="ex-container">            <h3> <i class="fa fa-compass"></i> Explore</h3>            <div class="explore" onclick="home()">   <i class="fa fa-home"></i>            Home            </div>            <div class="explore" onclick="generations()">          <i class="fa fa-history"></i>       Generations            </div>            <div class="explore" onclick="pricing()">                <i class="fa fa-dollar-sign"></i> Pricing            </div>            <div class="explore" onclick="info()">        <i class="fa fa-info-circle"></i>        Info            </div>        </div>        </center> ';

document.getElementById("info").innerHTML = '\
<a class="" href="info.html" draggable="false">\
<div class="info-tab">\
    <i class="fa fa-info"></i>\
</div>\
</a> ';
var name = "Om Lokhande | Akash Mhais | Prashant Londhe | Ruchika Mapari",
    roll = "73, 74, 75, 76",
    branch = "Mechanical",
    img = "img/3.png";

function stats() {
    var n = document.getElementById("stats");
    "-620px" == n.style.bottom ? (n.style.bottom = "20px", n.style.transition = "0.5s ease") : (n.style.bottom = "-620px", n.style.transition = "0.5s ease")
}