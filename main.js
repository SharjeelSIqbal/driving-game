var carStarting;
var $raceCar = document.querySelector('.race-car');
var currentCarPlace = {
  x: $raceCar.x,
  y: $raceCar.y
};

function rotate(event) {
  if (event.key === 'w') {
    $raceCar.className = 'race-car rotate-up';
  }
  if (event.key === 's') {
    $raceCar.className = 'race-car rotate-down';
  }
  if (event.key === 'd') {
    $raceCar.className = 'race-car';
  }
  if (event.key === 'a') {
    $raceCar.className = 'race-car rotate-180';
  }
  if (event.key === ' ') {
    carStarting = setInterval(carStart, 16);
  }
}
document.addEventListener('keydown', rotate);

function carStart() {
  if (currentCarPlace.x > 1080) {
    clearInterval(carStarting);
  }
  currentCarPlace.x += 13;
  $raceCar.style.transform = 'translateX(' + currentCarPlace.x + 'px)';
}
