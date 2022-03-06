
let toggleFunction= ()=> {
  if (document.body.style.backgroundColor != "white") {
    document.getElementsByClassName("circle")[0].style.left = "1px"
    document.body.style.background = "white";
  } else {
    document.getElementsByClassName("circle")[0].style.left = "30px"
      document.body.style.background = "hsl(230, 17%, 14%)";   
    }
}
function myFunction(element, color) {
    element.style.color = color;
  }