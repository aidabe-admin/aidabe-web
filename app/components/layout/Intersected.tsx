"use client"

import { useRef } from "react";
import useIntersectionObserver from "@/app/lib/Intersection";

export default function Intersected({ children, className, active, id, threshold= 1 } : {
    children: React.ReactNode
    className: string,
    active?: string,
    id?: string,
    threshold?: number
}){
    const targetRef = useRef<HTMLDivElement>(null);
    const isIntersecting = useIntersectionObserver(targetRef, { threshold: threshold});
    const addClass = isIntersecting ? active : '';

    return(
        <div ref={targetRef} className={`${addClass} ${className}`} id={id}>
            {children}
        </div>
    )
}