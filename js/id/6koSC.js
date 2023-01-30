var output = document.getElementById('6koSC');

var v1Thumbnail = "img/img4.jpg";
var v1Title = " Oreo Biscuit Prank | Mechanical";
var v1detail = 'UNOFFICIAL MECH <i class="fa fa-check-circle"></i> • 29 Jun 2022';

var v2Thumbnail = "img/img3.jpg";
var v2Title = " Oreo Biscuit Prank | Mechanical";
var v2detail = 'UNOFFICIAL MECH <i class="fa fa-check-circle"></i> • 05 Jul 2022';

var v3Thumbnail = "img/img2.jpg";
var v3Title = "SANJIVALI COE | STATUS VIDEO #3";
var v3detail = 'UNOFFICIAL MECH <i class="fa fa-check-circle"></i> • 26 Jun 2022';

var v4Thumbnail = "img/img1.jpg";
var v4Title = "SANJIVANI COE Status Video | New";
var v4detail = 'UNOFFICIAL MECH <i class="fa fa-check-circle"></i> • 08 Jul 2022';


document.getElementById('6koSC').innerHTML = '\
<div class="ind-cards-container">\
\
<div class="ind-card" onclick="link1()">\
    <img class="ind-img" src="'+ v1Thumbnail +'">\
    <img class="channel-img" src="img/avatar.jpg">\
    <div class="ind-details">\
        <p class="ind-title"> '+ v1Title +' </p>\
        <p class="ind-other-detail"> '+ v1detail +' </p>\
    </div>\
</div>\
\
<div class="ind-card" onclick="link2()">\
    <img class="ind-img" src="'+ v2Thumbnail +'">\
    <img class="channel-img" src="img/avatar.jpg">\
    <div class="ind-details">\
        <p class="ind-title"> '+ v2Title +' </p>\
        <p class="ind-other-detail"> '+ v2detail +' </p>\
    </div>\
</div>\
\
<div class="ind-card" onclick="link3()">\
    <img class="ind-img" src="'+ v3Thumbnail +'">\
    <img class="channel-img" src="img/avatar.jpg">\
    <div class="ind-details">\
        <p class="ind-title"> '+ v3Title +' </p>\
        <p class="ind-other-detail"> '+ v3detail +' </p>\
    </div>\
</div>\
\
<div class="ind-card" onclick="link4()">\
    <img class="ind-img" src="'+ v4Thumbnail +'">\
    <img class="channel-img" src="img/avatar.jpg">\
    <div class="ind-details">\
        <p class="ind-title"> '+ v4Title +' </p>\
        <p class="ind-other-detail"> '+ v4detail +' </p>\
    </div>\
</div>\
\
</div>\
';


// document.getElementById('6koSC').innerHTML = '\
// <div class="custom-mech-card">\
//     <h1>FEATURED</h1>\
//     <div class="mech-card " onclick="link1()">\
//     <img class="mech-card-img" draggable="false" src="'+ v1Thumbnail +'">\
//     <h3 class="dr-title placeholder"> '+ v1Title +' </h3>\
//     <h6 class="dr-details placeholder">\
//       <p class="">'+ v1detail +'</p>\
//     </h6>\
//   </div>\
//   <div class="mech-card " onclick="link1()">\
//   <img class="mech-card-img" draggable="false" src="'+ v2Thumbnail +'">\
//   <h3 class="dr-title placeholder"> '+ v2Title +' </h3>\
//   <h6 class="dr-details placeholder">\
//     <p class="">'+ v2detail +'</p>\
//   </h6>\
// </div>\
// <div class="mech-card " onclick="link1()">\
// <img class="mech-card-img" draggable="false" src="'+ v3Thumbnail +'">\
// <h3 class="dr-title placeholder"> '+ v3Title +' </h3>\
// <h6 class="dr-details placeholder">\
//   <p class="">'+ v3detail +'</p>\
// </h6>\
// </div>\
// <div class="mech-card " onclick="link1()">\
// <img class="mech-card-img" draggable="false" src="'+ v4Thumbnail +'">\
// <h3 class="dr-title placeholder"> '+ v4Title +' </h3>\
// <h6 class="dr-details placeholder">\
//   <p class=""> '+ v4detail +' </p>\
// </h6>\
// </div>\
// </div>\
// \
// ';
