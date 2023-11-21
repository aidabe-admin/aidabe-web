import Link from "next/link";

interface NavLink {
  title: string;
  link: string;
}

interface MenuProps {
  navlinks: NavLink[];
  openMenu: boolean;
}

const Menu: React.FC<MenuProps> = ({ navlinks, openMenu }) => {
    return (
        <>
            <div id="menu" className={`menu ${openMenu ? 'open-menu' : ''}`}>
                <nav id="menu-nav">
                    <ul id="menu-navlist">
                    {navlinks.map((navlink) => (
                        <li key={navlink.title} className="nav-container">
                            <div className="text-container">
                                <Link className="menu-navlink" href={navlink.link}>
                                    {navlink.title}
                                </Link>
                            </div>
                        </li>
                    ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Menu;
