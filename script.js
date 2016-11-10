(function() {
  'use strict';

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  const createLightEventListener = (button, light, color) => {
    button.addEventListener('click', () => {
    stopLight.style.backgroundColor = 'black';
    slowLight.style.backgroundColor = 'black';
    goLight.style.backgroundColor = 'black';
    light.style.backgroundColor = color;
  })}

  createLightEventListener(stopButton, stopLight, 'red');
  createLightEventListener(slowButton, slowLight, 'orange');
  createLightEventListener(goButton, goLight, 'lightgreen');
})();
