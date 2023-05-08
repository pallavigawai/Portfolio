function myFunction() {
  var x = document.getElementsByClassName("nav-pills");
  if (x.className === "nav-pills") {
    x.className += " responsive";
  } else {
    x.className = "nav-pills";
  }
}
