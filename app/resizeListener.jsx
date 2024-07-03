"use client"
import { useEffect, useState } from 'react';

export default function ResizeListener() {

    const [windowWidth, setWindowWidth] = useState(null);

    useEffect(() => {
        const overlay = document.querySelector('.overlay');

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleResizeEffect = () => {
            if (windowWidth > 768) {
                document.body.style.overflow = 'auto';
            } else if (overlay.classList.contains('overlay--visible')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        window.addEventListener('resize', handleResize);

        handleResizeEffect();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    return null;
}