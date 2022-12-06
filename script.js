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