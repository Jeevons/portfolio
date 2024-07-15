// src/utils/textEffect.js
import { gsap } from 'gsap';

export const applyTextEffect = (element) => {
  const words = element.textContent.split(' ').map((word) => {
    if (word.length <= 3) {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.classList.add('letter', 'short-word');
      return span;
    } else {
      return word.split('').map((letter) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.classList.add('letter');
        return span;
      }).concat(document.createTextNode(' ')); // Add space between words
    }
  }).flat();

  element.innerHTML = '';
  words.forEach((word) => {
    if (Array.isArray(word)) {
      word.forEach((letter) => element.appendChild(letter));
    } else {
      element.appendChild(word);
    }
  });

  const tweens = {};

  words.forEach((word, idx) => {
    if (word.classList && word.classList.contains('letter')) {
      tweens[idx] = gsap.to(word, { yPercent: -50, yoyo: true, repeat: 1, paused: true });
      word.dataset.tween = idx;
    } else if (Array.isArray(word)) {
      word.forEach((letter) => {
        if (letter.classList && letter.classList.contains('letter')) {
          tweens[idx] = gsap.to(letter, { yPercent: -50, yoyo: true, repeat: 1, paused: true });
          letter.dataset.tween = idx;
        }
      });
    }
  });

  const onMouseOver = (event) => {
    const trg = event.target;

    if (trg.dataset.tween) {
      const tween = tweens[trg.dataset.tween];

      if (!gsap.isTweening(trg)) {
        tween.play(0);
      }
    }
  };

  element.addEventListener('mouseover', onMouseOver);

  return () => {
    element.removeEventListener('mouseover', onMouseOver);
  };
};
