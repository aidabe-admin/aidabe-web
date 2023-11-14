// Agrega esta declaración global antes de tu función pageview
declare global {
    interface Window {
      gtag: (event: string, GA_MEASUREMENT_ID: string, options: { page_path: string }) => void;
    }
  }
  
  export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  };
  