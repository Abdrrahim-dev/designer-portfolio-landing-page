let card = document.querySelectorAll(".card[data-img]");
for (let i = 0; i < card.length; i++) {
  card[i].onmouseenter = function () {
    let img = card[i].getAttribute("data-img");
    card[i].style.backgroundImage = `url("${img}")`;
    card[i].style.backgroundSize = `cover`;
  };
  card[i].onmouseleave = function () {
    card[i].style.backgroundImage = ``;
    card[i].style.backgroundSize = ``;
    card[i].style.backgroundColor = `#020225`;
  };
}
// document.querySelector("button").onmouseleave
