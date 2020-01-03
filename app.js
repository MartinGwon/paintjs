const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

ctx.strokeStle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function handleMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleMouseDown(event) {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function init() {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

init();
