var $raceCar = document.querySelector('.race-car');

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

}
document.addEventListener('keydown', rotate);
