const roach = document.getElementById("roach");
const scoreEl = document.getElementById("score");

let score = 0;
let width = window.innerWidth;
let height = window.innerHeight;

function moveRoach() {
  const x = Math.random() * (width - 60);
  const y = Math.random() * (height - 60);
  roach.style.left = `${x}px`;
  roach.style.top = `${y}px`;
}

roach.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
  moveRoach();
});

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  moveRoach();
});

moveRoach();
