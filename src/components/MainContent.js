import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './MainContent.css';

const images = [
  './images2.jpeg',
  './download.jpeg',
  './images1.jpeg'
];

function MainContent() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    reverse: index % 2 === 0,
    delay: 200,
    config: { duration: 1000 },
  });

  return (
    <main className="MainContent">
      <animated.div className="background" style={fadeIn}>
        <img src={images[index]} alt="background" className="backgroundImage" />
      </animated.div>
      <section id="about">
        <h1>Welcome to One Life Health Care</h1>
        <p>Your mental health is our priority.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <p>We offer a variety of mental health services to support you.</p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for more information.</p>
      </section>
    </main>
  );
}

export default MainContent;
