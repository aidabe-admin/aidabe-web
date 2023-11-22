"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from '@/app/components/layout/styles/carousel.module.scss';

import Button from "@/app/ui/button";

interface Slide {
    title: string;
    image: string;
    subtitle: string;
    link: string | null;
    button: string | null;
}

interface SliderProps {
    content: Slide[];
}

export default function Slider({ content }: SliderProps) {
    const [activeSlide, setActiveSlide] = useState(0);    
    const slideCount = content.length;
    const interval = 10000;
    const slideWidth = 100;

    const nextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % slideCount);
    };

    const resetTimer = () => {
        clearInterval(timerRef.current!);
        timerRef.current = setInterval(nextSlide, interval);
    };

    const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
          };
      
          window.addEventListener('resize', handleResize);
      
        resetTimer();
        handleResize();

        return () => {
            clearInterval(timerRef.current!);
            window.removeEventListener('resize', handleResize);
        };
    }, [activeSlide]);

    return (
        <>
            {isMobile ? (
                <div className={styles.mainCarousel}>
                    <div className={styles.carousel} style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}>
                        {content.map((slide, index) => (
                            <div
                                key={index}
                                className={`${styles.slide} ${index === activeSlide ? styles.activeSlide : ""}`}
                                style={{ width: `${slideWidth}%` }}
                            >
                                <div className={styles.slideImg}>
                                    <Image fill src={slide.image} alt={slide.title} />
                                </div>
                                <div className={styles.slideMask}></div>
                                <div className={styles.slideData}>
                                    <h4 className={styles.slideTitle}>{slide.title}</h4>
                                    <p className={styles.slideSubtitle}>{slide.subtitle}</p>
                                    {slide.link && slide.button && (
                                        <Link href={slide.link} className={styles.slideButton}>
                                            <Button style="default" text={slide.button} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.dots}>
                        {content.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ""}`}
                                onClick={() => {
                                    setActiveSlide(index);
                                    resetTimer();
                                }}
                            ></span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.mainCarouselContainer_Lg}>
                    <div className={styles.mainCarousel_Lg}>
                        <div className={styles.carousel_Lg}>
                            <Image
                                src={content[activeSlide].image}
                                alt=""
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                            />
                        </div>
                            <div className={styles.slideData_Lg}>
                                <div
                                    className={styles.dataCarousel}
                                    style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}
                                >
                                    {content.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`${styles.slide} ${index === activeSlide ? styles.activeSlide_Lg : ""}`}
                                            style={{ width: `${slideWidth}%` }}
                                        >
                                            <h4 className={styles.slideTitle_Lg}>{slide.title}</h4>
                                            <p className={styles.slideSubtitle_Lg}>{slide.subtitle}</p>
                                            {slide.link && slide.button && (
                                                <Link href={slide.link} className={styles.slideButton_Lg}>
                                                    <Button style="danger" text={slide.button} />
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.dots}>
                                    {content.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`${styles.dot} ${index === activeSlide ? styles.activeDot : ""}`}
                                            onClick={() => {
                                                setActiveSlide(index);
                                                resetTimer();
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                    </div>
                </div>
        )}
        </>
    );
}