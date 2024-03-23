import { ViewportEvents } from './libs/viewport-events/viewport-events.class';

document.addEventListener('DOMContentLoaded', () => {
  new ViewportEvents([
    {
      action: 'add-class',
      classList: ['animated'],
      selector: '.transparent',
      threshold: 1,
      delay: 100
    },
    {
      action: 'add-class',
      classList: ['animated'],
      selector: '.motion-up',
      threshold: 1,
      delay: 100
    },
  ]);
});
