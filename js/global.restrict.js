
document.onkeydown = function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
         e.keyCode === 86 ||
         e.keyCode === 85 ||
         e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});
// $(document).keydown(function (event) {
//     if (event.keyCode == 123) { // Prevent F12
//         return false;
//     } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I
//         return false;
//     }
// });
document.addEventListener('contextmenu', event => event.preventDefault());

fetch('../vids.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});

function appendData(data) {
let mainContainer = document.getElementById("data");
for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerHTML =
    '<video class="video" controls  controlsList="nodownload">\
    <source id="source" src="'+ data[i].vid + '">\
</video>\
<div class="title"> '+ data[i].vid + ' ANTARANG 2K22 UNOFFICIAL VIDEO | SANJIVANI COE  </div>\
<div class="description">\
    <p class="tag">#ANTRANG 2K22</p><br>\
    <p class="detail"> ' + data[i].views + ' • Published 06 June 2022</p>\
    Thumbnail - Vivek Mule<br>\
    Video - Om Lokhande\
</div>\
<div class="btn-container">\
    <i id="swap" class="fa fa-thumbs-up ic-btn"></i>\
    <i class="fa fa-thumbs-down ic-btn"></i>\
    <i class="fa fa-comment ic-btn"></i>\
    <i class="fa fa-share ic-btn"></i>\
</div>';
    //div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName + '<br>' + 'Roll No.: ' + data[i].roll;
    mainContainer.appendChild(div);
}
}