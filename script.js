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

function changeProgress(id) {
    var checkBox = document.getElementById("flexCheckDefault");

    var percent = 10;

    if(checkBox.checked == true){
        percent = perecent > 90 ? 10 : percent + 10;
        id.style.width = percent + "%";
    } else {
        percent = percent > 90 ? 10 : percent - 10;
        id.style.width = percent + "%";
    }
}

function Task(name){
    this.taskName = ""
}

var newTask = new Task();

function createNewTask(){
    newTask.taskName = newTaskForm.taskNameForm.value;
    document.getElementById("item-workspace").innerHTML += '<div class="item-task border-bottom"><div class="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onclick="addProgress(this)"><label class="form-check-label" for="flexCheckDefault">' + newTask.taskName + '</label></div></div>';     
}