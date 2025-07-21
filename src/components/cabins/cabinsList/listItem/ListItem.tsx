import { CabinItem } from "../../../../model/cabinItem"
import { CabinInfo } from "./cabinInfo";
import css from './listItem.module.scss'

type ListItemProps = {
    item: CabinItem;
}

export const ListItem = ({ item }: ListItemProps) => {
    return (
        <div className={css.list__item}>

            <div className={css.list__item__image}>
                <img src={`/${item.image}`} alt="" />
            </div>

            <div className={css.list__item__info}>
                <CabinInfo item={item}/>
            </div>

        </div>
    )
}