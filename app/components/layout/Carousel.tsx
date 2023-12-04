"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from '@/app/components/layout/styles/carousel.module.scss';

import Button from "@/app/ui/button";
import ImageContainer from "@/app/ui/ImageContainer";

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

    useEffect(() => {
        resetTimer();

        return () => {
            clearInterval(timerRef.current!);
        };
    }, [activeSlide]);

    return (
        <>
            <div className={styles.mainCarousel}>
                <div className={styles.carousel} style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}>
                    {content.map((slide, index) => (
                        <div
                            key={index}
                            className={`${styles.slide} ${index === activeSlide ? styles.activeSlide : ""}`}
                            style={{ width: `${slideWidth}%` }}
                        >
                            <ImageContainer className={styles.slideImg} image={slide.image} alt={slide.title} />
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
        </>
    );
}