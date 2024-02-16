import React, { useEffect, useRef } from 'react';

const CircularText = ({ text, radius }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const characters = text.split('');
        const degreeIncrement = 360 / characters.length;

        container.innerHTML = ''; // Clear the container before adding new spans
        characters.forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.position = 'absolute';
            span.style.transform = `rotate(${degreeIncrement * index}deg) translate(${radius}px) rotate(${degreeIncrement * index - 90}deg)`;
            container.appendChild(span);
        });
    }, [text, radius]);

    return <div ref={containerRef} className="circularTextContainer" style={{ width: `${2 * radius}px`, height: `${2 * radius}px` }}></div>;
};

export default CircularText;
