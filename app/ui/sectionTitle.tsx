"use client"

import styles from '@/app/ui/styles/sectionTitle.module.scss';
import { useRef } from 'react';
import useIntersectionObserver from '@/app/lib/Intersection';

interface Title {
    title: string,
    color?: boolean
}

export default function SectionTitle({title, color} : Title) {
    const targetRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(targetRef, { threshold: 1});
    const animationClass = isIntersecting ? styles.active_title : '';

    return(
        <div ref={targetRef} className={`${styles.sectionTitle_cont} ${animationClass}`}>
            <h2 className={`${styles.sectionTitle} ${color ? styles.sectionTitle_White : ""}`}>{title}</h2>
        </div>
    )
}