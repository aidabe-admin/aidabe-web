import Link from "next/link";

interface FooterItem {
    title: string;
    href: string;
}

export default function FooterList({ title, items, id} : {
    title: string,
    items: FooterItem[],
    id: string,
}) {
    return(
        <div className="footer-list-container" id={id}>
            <h4 className="footer-list-title">
                {title}
            </h4>
            <ul className="footer-list">
                {items.map((item, index) => (
                    <li key={index} className="footer-item">
                        <Link href={item.href}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}