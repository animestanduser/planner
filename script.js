$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


function addProgress() {
    // Get the checkbox
    var checkBox = document.getElementById("flexCheckDefault");
    // Get the output element
    var progressBar1 = document.getElementById("progressBar1");

    var percent = 10;
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        percent = percent > 90 ? 10 : percent + 10;
        document.querySelector(".progress-bar").style.width = percent + "%";
    } else {
        percent = percent > 90 ? 10 : percent - 10;
        document.querySelector(".progress-bar").style.width = percent + "%";
    }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
    // create a new div element 
	var newDiv = document.createElement("div"); 
    // assigning class name to the new div
    newDiv.className = "item-task border-bottom";
    newDiv.id = "newdiv1";

    var newFormItem = document.createElement("input");
    newFormItem.className = "form-check-input";
    newFormItem.id = "flexCheckDefault";
    newFormItem.type = "checkbox";
    newFormItem.value = "";
    newFormItem.onclick= "addProgress(this)";

    var newFormLabel = document.createElement("label");
    newFormLabel.className = "form-check-label";
    newFormLabel.id = "newFormLabelId";
    newFormLabel.for = "flexcheckDefault";

    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    newFormLabel.appendChild(t);

    if (inputValue === '') {
      alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(newDiv);
        document.getElementById("newdiv1").appendChild(newFormItem);
        document.getElementById("flexCheckDefault").appendChild(newFormLabel);
        document.getElementById("flexCheckDefault").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }