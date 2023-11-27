import Link from "next/link";

interface NavLink {
  title: string;
  link: string;
}

interface MenuProps {
  navlinks: NavLink[];
  openMenu: boolean;
  onClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ navlinks, openMenu, onClick }) => {
    return (
        <>
            <div id="menu" className={`menu ${openMenu ? 'open-menu' : ''}`}>
                <nav id="menu-nav">
                    <ul id="menu-navlist">
                    {navlinks.map((navlink, index) => (
                        <li key={navlink.title} className="nav-container" onClick={onClick}>
                            <div className="text-container">
                                <Link className={
                                        `menu-navlink ${openMenu ? `act-navlink-${index + 1} active-navlink` : ''}`
                                    } href={navlink.link}>
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
