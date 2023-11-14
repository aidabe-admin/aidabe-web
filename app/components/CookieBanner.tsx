'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';
import { useState, useEffect } from 'react';

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (
        <div>
            <div className='text-center'>
                <Link href="/info/cookies"><p>We use <span>cookies</span> on our site.</p></Link>
            </div>
            <div className='flex gap-2'>
                <button
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </button>

                <button
                    onClick={() => setCookieConsent(true)}
                >
                    Allow Cookies
                </button>
            </div>   
        </div>
    )}