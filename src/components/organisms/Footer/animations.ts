/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default () => {
  const lines = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    lines.current.forEach((line, index) => {
      if (line) {
        gsap.from(line, {
          autoAlpha: 0,
          y: 50,
          ScrollTrigger: {
            trigger: line,
            start: 'center 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none none',
            markers: false
          },
          delay: index * 0.2,
          duration: 1.5
        });
      }
    });
  }, []);

  return { lines };
};
