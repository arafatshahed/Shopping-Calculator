function myfunc() {
  var numb1 = parseInt(document.getElementById("n1").value);
  var numb2 = parseInt(document.getElementById("n2").value);
  var result = numb1 + numb2;
  document.getElementById("msg").innerHTML = "Result :" + result;
  document.getElementById("msg").style.display = "block";
}
function rmv() {
  document.getElementById("msg").style.display = "none";
}
