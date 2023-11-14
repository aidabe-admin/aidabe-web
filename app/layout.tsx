import type { Metadata } from 'next';
import GoogleAnalytics from './components/GAnalytics';
import './styles.scss'

export const metadata: Metadata = {
  title: 'AIDABE',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <GoogleAnalytics GA_MEASUREMENT_ID={process.env.GA_MEASUREMENT_ID || ""} />
      <body>
        {children}
      </body>
    </html>
  )
}
