var carStarting;
var $raceCar = document.querySelector('.race-car');
var carStatus = {
  x: $raceCar.x,
  y: $raceCar.y,
  start: false
};

function rotate(event) {

  if (event.key === 'w') {
    $raceCar.style.transform = 'translateY(' + carStatus.y + 'px) translateX(' + carStatus.x + 'px)rotate(-90deg)';
    carStatus.y -= 45;
  }
  if (event.key === 's') {
    $raceCar.style.transform = 'translateY(' + carStatus.y + 'px) translateX(' + carStatus.x + 'px) rotate(90deg)';

    carStatus.y += 45;
  }
  if (event.key === 'd') {
    $raceCar.style.transform = 'translateX(' + carStatus.x + 'px) translateY(' + carStatus.y + 'px)';
    carStatus.x += 45;
  }
  if (event.key === 'a') {
    $raceCar.style.transform = 'translateX(' + carStatus.x + 'px) translateY(' + carStatus.y + 'px) rotate(180deg)';
    carStatus.x -= 45;
  }
  if (event.key === ' ') {
    onSwitch();
    if (carStatus.start === true) {
      carStarting = setInterval(carStart, 16);
    } else {
      clearInterval(carStarting);
    }

  }
}

document.addEventListener('keydown', rotate);

function carStart() {
  if (carStatus.x > 2500) {
    clearInterval(carStarting);
  }
  carStatus.x += 8;
  $raceCar.style.transform = 'translateX(' + carStatus.x + 'px) translateY(' + carStatus.y + 'px)s';
}

function onSwitch() {
  if (carStatus.start === false) {
    carStatus.start = true;
  } else {
    carStatus.start = false;
  }
}
