var carStarting;
var $raceCar = document.querySelector('.race-car');
var currentCarPlace = {
  x: $raceCar.x,
  y: $raceCar.y,
  start: false
};

function rotate(event) {

  if (event.key === 'w') {
    $raceCar.className = 'race-car rotat e-up';
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
    onSwitch();
    if (currentCarPlace.start === true) {
      carStarting = setInterval(carStart, 16);
    } else {
      clearInterval(carStarting);
    }

  }
}

document.addEventListener('keydown', rotate);

function carStart() {

  if (currentCarPlace.x > 4000) {
    clearInterval(carStarting);
  }
  currentCarPlace.x += 8;
  $raceCar.style.transform = 'translateX(' + currentCarPlace.x + 'px)';
}

function onSwitch() {
  if (currentCarPlace.start === false) {
    currentCarPlace.start = true;
  } else {
    currentCarPlace.start = false;
  }
}
