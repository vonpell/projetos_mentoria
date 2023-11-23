document.addEventListener("DOMContentLoaded", () => {
  createPanel(16);

  let getSizeButton = document.getElementById("getSize");
  getSizeButton.addEventListener("click", () => {
    let size = document.getElementById("size").value;
    createPanel(size);
  });
});

let color = "black";
let rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];

let createPanel = (size) => {
  let panel = document.querySelector(".panel");

  panel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  panel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divs = size * size;

  for (let i = 0; i < divs; i++) {
    let div = document.createElement("div");    
    div.addEventListener("mouseover", chosenColor);
    panel.insertAdjacentElement("beforeend", div);
  }
};

let clearPanel = () => {
    let divs = document.querySelectorAll(".panel div");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
}

function chosenColor () {
    if (color === "random") {
        this.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);        
    }
    else if (color === "rainbow") {
        this.style.backgroundColor = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function changeColor(colorChoice) {
    color = colorChoice;
}
