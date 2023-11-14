'use client';

import { pageview } from '@/app/lib/gTagHelper';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getLocalStorage, setLocalStorage } from '@/app/lib/storageHelper';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);
    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    // Utiliza 'gtag' con el evento 'consent' y la información adecuada
    pageview('GA_MEASUREMENT_ID', '/cookie-consent'); // Ajusta 'GA_MEASUREMENT_ID' y la ruta según tu configuración

    // Elimina 'ad_storage' y 'analytics_storage' del objeto que se pasa a 'window.gtag'
    window.gtag("consent", 'update', {
      'page_path': '/cookie-consent', // Ajusta la ruta según tu configuración
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div>
      <div className='text-center'>
        <Link href="/info/cookies">
          <p>We use <span>cookies</span> on our site.</p>
        </Link>
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
  );
}
