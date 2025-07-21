import { Logo } from "../../ui/logo/Logo";
import { Menu } from "./menu";
import css from "./header.module.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    const isIndexPage = location.pathname === '/';

    return (
        <header className={classNames(css.header, !isIndexPage && css.header__bg)}>
            <div className={css.header__wrapper}>
                <Logo/>
                <Menu/>
            </div>
        </header>
    );
}