/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default () => {
  const sectionRef = useRef('');
  const content = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const articles = content.current;
    if (!section && articles.length <= 0) {
      return;
    }

    gsap.from(section, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power2.out'
    });

    articles.forEach((article, index) => {
      gsap.from(article, {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.2 * index,
        ease: 'power2.out'
      });
    });
  }, []);

  return {sectionRef, content}
};
