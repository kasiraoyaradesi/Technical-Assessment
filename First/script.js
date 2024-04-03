const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');
const h = document.getElementById('p');
let clickedImages = [];
let state = 1;

function Images() {
  const parent = document.getElementById('images');
  for (let i = parent.children.length; i >= 0; i--) {
    parent.appendChild(parent.children[Math.random() * i | 0]);
  }
}

Images();