"use client"

import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
  targetRef: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const isElementIntersecting = entries[0].isIntersecting;
        if (isElementIntersecting) {
          setIsIntersecting(true);
          // Desconecta el observer después de la primera intersección
          observer.current?.disconnect();
        }
      },
      options
    );

    const targetElement = targetRef.current;

    if (targetElement) {
      observer.current.observe(targetElement);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
