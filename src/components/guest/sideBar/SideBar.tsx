import css from './sideBar.module.scss'
import {HomeIcon} from "../../../shared/icons/HomeIcon";
import {CalendarIcon} from "../../../shared/icons/CalendarIcon";
import {NavLink, useLocation} from "react-router-dom";

export const SideBar = () => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            <NavLink to="/guest/home">
                <li className={location.pathname === '/guest/home' ? css.active : ''}>
                    <HomeIcon/>
                    Home
                </li>
            </NavLink>

            <NavLink to="/guest/reservations">
                <li className={location.pathname === '/guest/reservations' ? css.active : ''}>
                    <CalendarIcon/>
                    Reservations
                </li>
            </NavLink>
        </ul>
    )
}