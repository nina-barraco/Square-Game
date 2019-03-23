function makeDiv() {
    var col = document.getElementById("column-input").value;
    var row = document.getElementById("row-input").value;
    for (var i=0; i<row; i++) {
        var firstDiv = document.createElement("div");
        var space = document.getElementById("test");
        space.appendChild(firstDiv);
        for (var j=0; j<col; j++) {
            var newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'box-style');
            firstDiv.appendChild(newDiv);
        }
    }
}

var submit = document.getElementById("submit-button");
submit.addEventListener("click", makeDiv);