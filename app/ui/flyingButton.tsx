"use client"

import React, { useState, useEffect } from 'react';
import styles from '@/app/ui/styles/flyingButton.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface ButtonProps {
  id: string;
}

const FloatingButton: React.FC<ButtonProps> = ({ id }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    // Hacer scroll hasta el principio
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Puedes ajustar esto para tener un scroll suave o instantáneo
    });
  };

  return (
    <div
      id={id}
      className={`${styles.button} ${scrolled ? styles.activeButton : ''}`}
      onClick={handleButtonClick}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
};

export default FloatingButton;