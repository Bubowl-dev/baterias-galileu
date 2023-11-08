/* eslint-disable import/no-anonymous-default-export */
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default () => {
    const backgroundSecondImageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            repeatRefresh: true,
            repeatDelay: 0,
            ease: 'none'
        });

        tl.to(backgroundSecondImageRef.current, {
            duration: 0.7,
            delay: 2,
            opacity: 1,
            ease: 'power1.inOut'
        }).to(backgroundSecondImageRef.current, {
            duration: 0.7,
            opacity: 0,
            delay: 2,
            ease: 'power1.inOut'
        });
    }, []);

    return {
        backgroundSecondImageRef
    };
};
