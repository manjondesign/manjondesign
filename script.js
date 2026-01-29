let index = 0;
const screens = document.querySelectorAll('.screen');
const total = screens.length;
let locked = false;

function showScreen(i) {
  screens.forEach((s, idx) => {
    if (idx === i) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

function next() {
  if (!locked) {
    locked = true;
    index = (index + 1) % total;
    showScreen(index);
    setTimeout(() => locked = false, 900);
  }
}

function prev() {
  if (!locked) {
    locked = true;
    index = (index - 1 + total) % total;
    showScreen(index);
    setTimeout(() => locked = false, 900);
  }
}

window.addEventListener('wheel', (e) => {
  if (e.deltaY > 0) next();
  else prev();
});

let touchStartY = 0;

window.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchend', (e) => {
  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  if (Math.abs(deltaY) < 40) return;

  if (deltaY > 0) next();
  else prev();
});

showScreen(index);
