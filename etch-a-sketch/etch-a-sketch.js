document.addEventListener("DOMContentLoaded", () => {
  createPanel(16);
  
  createPanel(getSize());
});

function getSize () {    
    size = document.getElementById("size").value;
    return size;        
}

console.log(size);

let createPanel = (size) => {
  let panel = document.querySelector(".panel");

  panel.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  panel.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let divs = size * size;

  for (let i = 0; i < divs; i++) {
    let div = document.createElement("div");
    div.style.border = "1px groove gray";    
    div.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    panel.insertAdjacentElement("beforeend", div);
  }
};
