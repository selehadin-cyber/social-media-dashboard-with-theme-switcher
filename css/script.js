let toggleFunction = () => {
  if (document.body.style.backgroundColor != "white") {
    document.getElementsByClassName("circle")[0].style.left = "1px";
    document.body.style.background = "white";
    document
      .querySelectorAll("div#account")
      .forEach((el) => (el.style.color = "hsl(228, 12%, 44%)"));
    document
      .querySelectorAll("p.year, p.count")
      .forEach((el) => (el.style.color = "hsl(230, 17%, 14%)"));
    document.getElementsByClassName("year")[0].style.color =
      "hsl(230, 17%, 14%)";
    document
      .getElementsByClassName("left")[0]
      .getElementsByTagName("h1")[0].style.color = "hsl(230, 17%, 14%)";
    document.getElementsByClassName("overview")[0].style.color =
      "hsl(230, 17%, 14%)";
    document
      .querySelectorAll("div.card, div.card2")
      .forEach((el) => (el.style.backgroundColor = "hsl(227, 47%, 96%)"));
  } else {
    document.getElementsByClassName("circle")[0].style.left = "30px";
    document.body.style.background = "hsl(230, 17%, 14%)";
    document
      .querySelectorAll("div#account")
      .forEach((el) => (el.style.color = "hsl(228, 34%, 66%)"));
    document
      .querySelectorAll("p.year, p.count")
      .forEach((el) => (el.style.color = "hsl(0, 0%, 100%)"));
    document.getElementsByClassName("year")[0].style.color = "hsl(0, 0%, 100%)";
    document
      .getElementsByClassName("left")[0]
      .getElementsByTagName("h1")[0].style.color = "hsl(0, 0%, 100%)";
    document.getElementsByClassName("overview")[0].style.color =
      "hsl(0, 0%, 100%)";
    document
      .querySelectorAll("div.card, div.card2")
      .forEach((el) => (el.style.backgroundColor = "hsl(228, 28%, 20%)"));
  }
};
function myFunction(element, color) {
  element.style.color = color;
}
