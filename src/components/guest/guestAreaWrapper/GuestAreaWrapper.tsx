import { Outlet } from "react-router-dom"
import { SideBar } from "../sideBar"
import css from "./guestAreaWrapper.module.scss"

export const GuestAreaWrapper = () => {
    return (
        <div className={css.wrapper}>
            <SideBar/>
            <Outlet/>
        </div>
    )
}