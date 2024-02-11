let size = prompt("How many boxes per side?");

if (size >= 100) {
  size = 100;
}

const container = document.getElementById("grid-container");
container.style.width = size * 16 + "px";
container.style.height = size * 16 + "px";

for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "purple";
  });

  container.appendChild(div);
}
