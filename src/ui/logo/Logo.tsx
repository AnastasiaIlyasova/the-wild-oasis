import css from "./logo.module.scss"
import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link to='/'>
            <div className={css.logo}>
                <img src="/logo.png" alt="logo" />
                <span>The Wild Oasis</span>
            </div>
        </Link>
    )
}