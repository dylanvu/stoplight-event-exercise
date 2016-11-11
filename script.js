(function() {
  'use strict';

  const stopButton = document.querySelector('#stopButton');
  const slowButton = document.querySelector('#slowButton');
  const goButton = document.querySelector('#goButton');

  const stopLight = document.querySelector('#stopLight');
  const slowLight = document.querySelector('#slowLight');
  const goLight = document.querySelector('#goLight');

  const wireupMouseenterEvent = (button) => {
    button.addEventListener('mouseenter', () => {
      console.log(`Entered ${button.textContent} button`);
    });
  }

  const wireupMouseleaveEvent = (button) => {
    button.addEventListener('mouseleave', () => {
      console.log(`Left ${button.textContent} button`);
    });
  }

  const wireupClickEvent = (button, light, className) => {
    button.addEventListener('click', () => {
      console.log(button.textContent);
      stopLight.classList.remove('stop');
      slowLight.classList.remove('slow');
      goLight.classList.remove('go');
      light.classList.add(className);
    });
  }

  const createButtonEvents = (button, light, className) => {
    wireupMouseenterEvent(button);
    wireupMouseleaveEvent(button);
    wireupClickEvent(button, light, className);
  };

  createButtonEvents(stopButton, stopLight, 'stop');
  createButtonEvents(slowButton, slowLight, 'slow');
  createButtonEvents(goButton, goLight, 'go');
})();
