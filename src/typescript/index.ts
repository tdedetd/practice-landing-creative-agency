import { Carousel } from './libs/carousel/carousel.class';
import { ViewportEvents } from './libs/viewport-events/viewport-events.class';

initCarousels();
initViewportEvents();

function initCarousels(): void {
  const getImgTranslateKoef = () => window.innerWidth >= 992 ? 700 : 300;

  window.addEventListener('load', () => {
    new Carousel<HTMLImageElement>({
      dots: {
        containerId: 'carousel-projects-dots',
        itemClass: 'carousel-projects-dot',
        onItemChange: ({ dotFrom, dotTo }): void => {
          const dotSelectedClass = 'carousel-projects-dot_selected';
          dotFrom?.classList.remove(dotSelectedClass);
          dotTo.classList.add(dotSelectedClass);
        }
      },
      items: {
        containerId: 'carousel-projects-images',
        onSelectItem: ({ container, item, relativeIndex }): void => {
          const sizeCoef = relativeIndex === 0 ? 1 : 0.75;
          const x = container.clientWidth / 2 - item.clientWidth / 2 + relativeIndex * getImgTranslateKoef();
          item.style.transform = `translateX(${x}px) scale(${sizeCoef})`;
          item.style.zIndex = String(100 - Math.abs(relativeIndex));
        },
        selectedIndex: 1,
      }
    });
  });
}

function initViewportEvents(): void {
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
}
