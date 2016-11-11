(function() {
  'use strict';

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  const createButtonEvents = (button, light, className) => {
    button.addEventListener('mouseover', () => {
      console.log(`Entered ${button.textContent} button`);
    });
    button.addEventListener('mouseout', () => {
      console.log(`Left ${button.textContent} button`);
    });
    button.addEventListener('click', () => {
      console.log(button.textContent);
      stopLight.classList.toggle('stop', false);
      slowLight.classList.toggle('slow', false);
      goLight.classList.toggle('go', false);
      light.classList.toggle(className);
      // button.addEventListener('click', () => {
      //   if (light.classList.contains(className)) {
      //     light.classList.toggle(className);
      //   }
      //   else {
      //     light.classList.toggle(className);
      //   }
      // });
    });
  };

  createButtonEvents(stopButton, stopLight, 'stop');
  createButtonEvents(slowButton, slowLight, 'slow');
  createButtonEvents(goButton, goLight, 'go');
})();
