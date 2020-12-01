// This code for opening and closing the modal is taken from W3 schools example
var project1 = document.getElementById("proj1");
var project2 = document.getElementById("proj2");

var project1_button = document.getElementById("proj1_button");
var project2_button = document.getElementById("proj2_button");

var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];

project1_button.onclick = function() {
    project1.style.display = "block";
}

span1.onclick = function() {
    project1.style.display = "none";
}

project2_button.onclick = function() {
    project2.style.display = "block";
}

span2.onclick = function() {
    project2.style.display = "none";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.key == "Escape") {
        project2.style.display = "none";
        project1.style.display = "none";
    }
};

window.onclick = function(event) {
    if (event.target == project2) {
      project2.style.display = "none";
    }
    if (event.target == project1) {
      project1.style.display = "none";
    }
}
