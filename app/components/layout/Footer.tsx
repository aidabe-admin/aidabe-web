import Link from "next/link";
import Image from "next/image";
import FooterList from "@/app/ui/footerList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const sections = [
    { title: "Nosotros", href: "/nosotros" },
    // { title: "Portal de Trabajo", href: "/portal-de-trabajo" },
    { title: "Blog", href: "/blog" }
];

const legals = [
    { title: "Política de privacidad", href: "/política-de-privacidad" },
    { title: "Cookies", href: "/cookies" },
    { title: "Aviso legal", href: "/aviso-legal" }
];

export default function Footer() {
    return(
        <footer>
            <div id="footer-logo-container">
                <Image
                    src='/aidabe-round-red-logo.png'
                    id="footer-logo"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <FooterList title="secciones" id="footer-sections-list" items={sections} />
            <FooterList title="legal" id="footer-legals-list" items={legals} />
            <div className="footer-list-container footer-socials-list">
                <h4 className="footer-list-title">
                    Redes sociales
                </h4>
                <ul className="footer-list">
                        <li className="footer-item">
                            <Link className="social-icon" href="/">
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </li>
                        <li className="footer-item">
                            <Link className="social-icon" href="/">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                        </li>
                </ul>
            </div>
            <div id="address-container">
                <div id="g-maps">
                </div>
                <div id="addresses">
                    <p><strong>Dirección:</strong> Avda. de la Buhaira 31, 1ºC, 48100 Sevilla</p>
                    <p><strong>E-mail:</strong> info@aidabe.org</p>
                </div>
            </div>
            <div id="copyright-footer">
                <p>All rights reserved<br />AIDABE - Asociación Iberoamericana de Directores de Alimentos y Bebidas - Jefaturas Ejecutivas de Cocina © 2023</p>
                <p id="link-to-creator">Hecho por <Link id="portfolio-link" href="https://larenasdamian.com">Damián</Link></p>
            </div>
        </footer>
    )
}