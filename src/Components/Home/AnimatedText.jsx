import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import './AnimatedText.css';

const questions = [
  'Are you hungry about creating an impact?',
  'Do you have a dream?',
  'Want to take your dream to next level?',
  'Want to make digital presence?',
  'Looking for a right team?',
  'Want to increase sales ?',
  'Want to lead the world?',
  'Ready to Scale ?'
];

const AnimatedText = () => {
  const textRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [displayed, setDisplayed] = useState(0); // triggers animation after DOM update

  useEffect(() => {
    setDisplayed(current); // update displayed question after current changes
  }, [current]);

  useEffect(() => {
    const textWrapper = textRef.current;
    if (!textWrapper) return;

    // Reset container opacity to 1 so next question is visible
    const ml11 = document.querySelector('.ml11');
    if (ml11) ml11.style.opacity = 1;

    // Clear previous animation by resetting opacity
    textWrapper.innerHTML = questions[displayed].replace(/([^\u0000-\x80]|\w)/g, "<span class='letter'>$&</span>");
    const letters = textWrapper.querySelectorAll('.letter');
    letters.forEach(letter => letter.style.opacity = 0);

    anime.timeline({ loop: false })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000, // slower animation
        delay: (el, i) => 100 * i // slower per letter
      })
      

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % questions.length);
    }, 3800); // faster transition to next question

    return () => clearTimeout(timer);
  }, [displayed]);

  return (
    <h1 className="ml11">
      <span className="text-wrapper">
        <span
          className="letters"
          ref={textRef}
        ></span>
      </span>
    </h1>
  );
};

export default AnimatedText;
