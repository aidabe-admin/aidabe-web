import Link from 'next/link';
import Image from 'next/image';
 
export default function NotFound() {
  return (
    <div className='main-wrapper'>
        <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 'calc(100dvh - 5rem)'
        }}>
            <Image src="/aidabe-round-red-logo.png" height={80} width={80} alt="Error - AIDABE logo" />
            <h2 style={{fontFamily: 'massilia, sans-serif', fontWeight: '900', fontSize: '2rem', marginTop: '2.5rem'}}>Error 404</h2>
            <p style={{marginTop: '.5rem'}}>Esta página no existe</p>
            <Link href="/" style={{marginTop: '2rem', color: '#b81626'}}>Vuelve a inicio</Link>
        </div>
    </div>
  )
}