import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { Draggable } from 'gsap/dist/Draggable';
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin';
import { TextPlugin } from 'gsap/dist/TextPlugin';

const GSAPInitializer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin, TextPlugin);
  }, []);

  return null;
};

export default GSAPInitializer;
