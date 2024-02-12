/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default () => {
  const sectionRef = useRef('');
  const content = useRef<HTMLElement[]>([]);
  const contentData = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const articles = content.current;
    const articlesData = contentData.current;

    if (!section && articles.length <= 0 && articlesData) {
      return;
    }

    gsap.from(section, {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: 'power2.inOut'
    });

    articles.forEach((article, index) => {
      gsap.from(article, {
        scrollTrigger: {
          trigger: articlesData,
          // markers: true,
          start: 'top 95%',
          end: 'top 70%',
          scrub: 1
        },
        x: -100,
        opacity: 0,
        duration: 2,
        delay: 0.2 * index,
        ease: 'power2.out'
      });
    });
  }, []);

  return { sectionRef, content, contentData };
};
