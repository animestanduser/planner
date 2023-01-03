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


// function for adding a new task list object
/*
function TaskList(name){
    this.taskListName = ""

}

var newTaskList = new TaskList();

function createNewTaskList(){
    newTaskList.taskListName = "Task List";
    document.getElementById("container").innerHTML += '<div class="col-md-2 item border"><div class="item-header border-bottom"><form name="newTaskForm" id="formForTask" target="stupidFrame"><input type="text" name="taskNameForm" placeholder="Write new task name" class="input-field"><input type="submit" id="submit" name="saveTaskForm" onclick="createNewTask()" class="input-field-button"><i class="fa-solid fa-plus"></i></input></form></div><div class="item-workspace" id="item-workspace"><iframe name="stupidFrame" id="stupidFrame" style="display: none;"></iframe><div class="item-progress-space"><div class="progress"><div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar"aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:0%" id="progressbar">percentage</div></div></div></div>';
}
*/

//Task lists
//create an html object that will contain the checkboxes
//make a function for progressing the progress-bar once checkbox will be clicked and make it smaller if its not clicked
//change the value of increasing the length of the progressed-bar based on number of added objects
//each one of the new objects should be independent, based on the constructors
// prop to be done in the for loop





// ??? would it be better with jquery ???