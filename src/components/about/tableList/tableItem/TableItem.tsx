import { FC } from "react";
import { TableItemAbout } from "../../../../model/tableItem";
import css from "./tableItem.module.scss";
import { TableItemImage } from "./tableItemImage";
import { TableItemText } from "./tableItemText";

type TableItemProps = {
    item: TableItemAbout;
    index: number;
}

export const TableItem:FC<TableItemProps> = ({ item, index }) => {
    const isEven = index % 2 === 0;
    const itemClass = isEven
    ? `${css.table__item} ${css.even}`
    : `${css.table__item} ${css.odd}`;

    return (
         <div className={itemClass}>
            <div className={isEven ? css.table__item__text__left : css.table__item__text__right}>
                <TableItemText title={item.title} description={item.description} buttonText={item.buttonText} buttonLink={item.buttonLink}/>
            </div>

            <div className={isEven ? css.table__item__image__right : css.table__item__image__left}>
                <TableItemImage image={item.image}/>
            </div>
        </div>
    );
}