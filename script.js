
// header function hide and show

function hideShow() {
    var checkBox = document.getElementById("test");
    // Get the output text
    var content = document.getElementById("content");
    var barIcon = document.getElementById("bar-icon")
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      content.style.visibility = "visible" ;
      barIcon.style.visibility = "hidden" ;
    } else {
      content.style.visibility = "hidden";
      barIcon.style.visibility = "visible" ;
    }
    console.log("ITS WORKING")
  }


  // toggle dark mode
  // applying changing mode method to id dark
const themeSwitch = document.getElementById('dark');

themeSwitch.addEventListener('change', () => {

  document.body.classList.toggle('dark-mode');
  console.log("toggled")
});