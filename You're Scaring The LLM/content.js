function shaking() {
  document.querySelectorAll('*').forEach(el => {
    el.style.transform = `rotate(${Math.random() * 1-.5}deg)`;
    el.style.transformOrigin = `${Math.random() * 100}% ${Math.random() * 100}%`
  });
  requestAnimationFrame(shaking);
}

shaking();