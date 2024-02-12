const colors = ['red', 'green', 'blue', 'yellow', 'cyan', 'white'];

const box = document.getElementById('parent-box');

const button = document.getElementById('merhab');

button.addEventListener('click', colorizer);

function colorizer() {
  const randomColors = colors[Math.floor(Math.random() * colors.length)]
  box.style.backgroundColor = randomColors
} 
