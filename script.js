const progress = document.getElementById("progress");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let message = document.querySelector(".message");

let currentStage = 1;

next.addEventListener("click", () => {
  currentStage++;
  if (currentStage > circles.length) {
    currentStage = circles.length;
  }
  update();
});

previous.addEventListener("click", () => {
  currentStage--;
  if (currentStage < 1) {
    currentStage = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentStage) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  processStyle(currentStage);
}

function processStyle(steps) {
  const activeElements = document.querySelectorAll(".active");
  let procentage =
    ((activeElements.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.width = procentage;
  if (steps === 1) {
    previous.disabled = true;

    messageHandler("Start Registration Now", "rgb(76, 139, 193)");
  } else if (steps === circles.length) {
    next.disabled = true;
    messageHandler("Registration Is Completed", "rgb(26, 193, 26)");
  } else {
    previous.disabled = false;
    next.disabled = false;
    messageHandler("Registration Is In Progress", "rgb(76, 139, 193)");
  }
}

function messageHandler(text, color) {
  message.innerHTML = text;
  message.style.color = color;
}
