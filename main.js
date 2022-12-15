// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");
let mousePressed = false;
document.body.onmousedown = function() { 
  mousePressed = true;
}

document.body.onmouseup = function() { 
  mousePressed = false;
}


colors.forEach((button) => {
  button.addEventListener("click",(event) =>{
    document.querySelector("#current-color").style.backgroundColor = button.style.backgroundColor;
  })
});

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click",(event) => {
    cell.style.backgroundColor = document.querySelector("#current-color").style.backgroundColor;
  })
})

cells.forEach((cell) => {
  cell.addEventListener("mouseover",(event) => {
    if (mousePressed){
      cell.style.backgroundColor = document.querySelector("#current-color").style.backgroundColor;
    }
  })
})
