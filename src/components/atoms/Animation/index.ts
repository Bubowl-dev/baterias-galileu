/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Section } from '@/components/organisms/ServicesPost/styles';

const Animation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionRefY = useRef<HTMLElement>(null);
  const sectionRefReviews = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sectionY = sectionRefY.current;
    const sectionReviews = sectionRefReviews.current;

    if (sectionY) {
      gsap.from(sectionY, {
        scrollTrigger: {
          trigger: sectionY,
          scrub: 1,
          start: 'top 90%',
          end: 'top center'
        },
        y: 30,
        opacity: 0,
        duration: 3,
        ease: 'power2.inOut'
      });
    }

    if (section) {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          scrub: 1,
          start: 'top 90%',
          end: 'top center'
        },
        y: 20,
        x: -20,
        opacity: 0,
        duration: 3,
        ease: 'power2.inOut'
      });
    }

    if (sectionReviews) {
      console.log('section', sectionReviews);
      gsap.from(sectionReviews, {
        scrollTrigger: {
          trigger: sectionReviews,
          markers: true,
          scrub: 1,
          start: 'top 60%',
          end: 'top center'
        },
        y: 20,
        x: -20,
        opacity: 0,
        duration: 3,
        ease: 'power2.inOut'
      });
    }
  }, []);

  return { sectionRef, sectionRefY, sectionRefReviews };
};

export default Animation;
