import { FC } from "react";
import css from "./tableItemText.module.scss";
import { TableItemAboutText } from "../../../../../model/tableItem";
import { Link } from 'react-router-dom';
import { Title } from "../../../../../shared/ui/Title";
import { Button } from "../../../../../shared/ui/button";

export const TableItemText:FC<TableItemAboutText> = ({title, description, buttonText, buttonLink }) => {

    return (
        <div className={css.table__item__text}>
            <Title title={title} className={css.table__item__text__title}/>

            <p className={css.table__item__text__description}>
                 {description.split("\n").map((line, idx) => (
                    <span key={idx}>
                        {line}
                        <br />
                    </span>
                ))}
            </p>

            {buttonText && buttonLink && <Link to={buttonLink}><Button buttonText={buttonText} className={css.table__item__text__button} /></Link>}
        </div>
    );
}