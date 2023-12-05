"use client"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import Button from "@/app/ui/button";
import ImageContainer from "@/app/ui/ImageContainer";

interface Slide {
    title: string;
    image: string;
    subtitle: string;
    link: string | null;
    button: string | null;
    priority: boolean;
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
            <div className="main-carousel">
                <div className="carousel" style={{ transform: `translateX(-${activeSlide * slideWidth}%)` }}>
                    {content.map((slide, index) => (
                        <div
                            key={index}
                            className={`slide ${index === activeSlide ? "active-slide" : ""}`}
                            style={{ width: `${slideWidth}%` }}
                        >
                            <ImageContainer className="slide-img" image={slide.image} alt={slide.title} priority={slide.priority} />
                            <div className="slide-mask"></div>
                            <div className="slide-data">
                                <h4 className="slide-title">{slide.title}</h4>
                                <p className="slide-subtitle">{slide.subtitle}</p>
                                {slide.link && slide.button && (
                                    <Link href={slide.link} className="slide-button">
                                        <Button style="default" text={slide.button} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {content.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeSlide ? "active-dot" : ""}`}
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