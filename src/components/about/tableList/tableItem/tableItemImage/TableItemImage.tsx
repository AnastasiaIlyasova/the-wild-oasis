import { FC } from "react";
import css from "./tableItemImage.module.scss";
import { TableItemAboutImage } from "../../../../../model/tableItem";

export const TableItemImage:FC<TableItemAboutImage> = ({ image }) => {
    return (
        <div className={css.table__item__image}>
            <img src={`/${image}`} alt="about" />
        </div>
    );
}