
function myFunction() {
  var x, text;

  
  x = document.getElementById("numb").value;

  
  if (isNaN(x) || x < 1 || x > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.getElementById("demo").innerHTML = text;
}



// var sub =  document.getElementById('submit');

// submit.onclick = function () {

//     }