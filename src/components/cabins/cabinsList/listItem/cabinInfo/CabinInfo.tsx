import { Link } from "react-router-dom";
import { CabinItem } from "../../../../../model/cabinItem";
import { GuestsIcon } from "../../../../../shared/icons";
import css from './cabinInfo.module.scss'

type ListItemProps = {
    item: CabinItem;
}

export const CabinInfo = ({ item }: ListItemProps) => {
    return (
        <div className={css.cabin__info}>
            <div className={css.cabin__info__name}>{item.name}</div>

            <div className={css.cabin__info__guests}>
                <GuestsIcon/>
                <p>For up to <b>{item.maxCapacity}</b> guests</p>
            </div>

            <div className={css.cabin__info__price}>
                <span className={css.cabin__info__price__regular}>{`$${item.discount > 0 ? item.discount : item.regularPrice}`} </span>
                {item.discount > 0 &&
                    <span className={css.cabin__info__price__discount}>
                        {`$${item.regularPrice}`}
                    </span>
                }
                &nbsp;/ night
            </div>

            <div className={css.cabin__info__details}>
                <Link to={`/cabin/${item.id}`}>Details & reservation →</Link>
            </div>
        </div>
    )
}