"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Menu from "@/app/components/layout/Menu";
import Burger from "@/app/ui/burger";

export default function Header() {
    const navlinks = [
        {
            title: 'actualidad',
            link: '/actualidad'
        },
        {
            title: 'la asociación',
            link: '/asociacion'
        },
        {
            title: 'asociados',
            link: '/asociados'
        },
        {
            title: 'eventos',
            link: '/eventos'
        },
        {
            title: 'contacto',
            link: '/contacto'
        },
    ];
    const [menu, setMenu] = useState(false);
    const [burger, setBurger] = useState(false);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleMenu = () => {
        setMenu(!menu)
        setBurger(!burger)
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.clientHeight - windowHeight;
        const percentage = (scrollPosition / bodyHeight) * 100;

        setScrollPercentage(percentage);
    };

    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menu]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <>
            <header id="main-header">
                <Link id="header-logo-cont" href="/">
                    <Image
                        src="/aidabe-logo.png"
                        alt="AIDABE logo"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </Link>
                <Burger handleClick={handleMenu} burger={burger} />
                <nav id="main-nav">
                    <ul id="main-navlist">
                        {navlinks.map((navlink) => (
                            <li key={navlink.title} className="main-navlink">
                                <Link href={navlink.link}>
                                    {navlink.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <div id="progress-bar">
                <div className="progress-indicator" style={{ width: `${scrollPercentage.toFixed(2)}%` }} />
            </div>
            <Menu navlinks={navlinks} openMenu={menu} />
        </>
    )
}