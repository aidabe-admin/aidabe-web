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

    pageview('GA_MEASUREMENT_ID', '/cookie-consent'); // Ajusta 'GA_MEASUREMENT_ID' y la ruta según tu configuración

    // Elimina 'ad_storage' y 'analytics_storage' del objeto que se pasa a 'window.gtag'
    window.gtag("consent", 'update', {
      'page_path': '/cookie-consent', // Ajusta la ruta según tu configuración
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div id='cookie-banner' className={`cookie-banner ${cookieConsent ? "" : "no-banner"}`}>
      <div id='cookie-banner-text'>
        <Link href="/cookies">
          <p>Para una mejor experiencia utilizamos <span>cookies</span> en nuestro sitio.</p>
        </Link>
      </div>
      <div id='cookie-buttons'>
        <button
          className='accept-cookie cookie-btn'
          onClick={() => setCookieConsent(true)}
        >
          Aceptar todas las cookies
        </button>

        <button
          className='decline-cookie cookie-btn'
          onClick={() => setCookieConsent(false)}
        >
          Rechazar todas las cookies
        </button>
      </div>
    </div>
  );
}
