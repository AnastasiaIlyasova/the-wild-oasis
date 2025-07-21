import { Link, useLocation } from "react-router-dom";
import css from "./menu.module.scss";

export const Menu = () => {
    const location = useLocation();

    return (
        <ul className={css.menu}>
            <li className={location.pathname === '/cabins' ? css.menu__active : ''}>
                <Link to='/cabins'>Cabins</Link>
            </li>
            <li className={location.pathname === '/about' ? css.menu__active : ''}>
                <Link to='/about'>About</Link>
            </li>
            <li className={location.pathname.includes('/guest') ? css.menu__active : ''}>
                <Link to='/guest'>Guest area</Link>
            </li>
        </ul>
    );
}