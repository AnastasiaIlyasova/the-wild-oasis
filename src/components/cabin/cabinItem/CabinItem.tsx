import css from './cabinItem.module.scss'
import { GuestsIcon, LocationIcon, PrivacyIcon } from '../../../shared/icons';
import { FC, useState } from 'react';
import { CabinItem as CabinItemType} from '../../../model/cabinItem';

type CabinItemProps = {
    neededCabin: CabinItemType;
}

export const CabinItem: FC<CabinItemProps> = ({ neededCabin }) => {
    const isLongDescription = neededCabin.description.length > 350;
    const [isShowMore, setShowMore] = useState(false);

    if (!neededCabin) {
        return <div>Cabin is not found</div>;
    }

    return (
        <div className={css.cabin__item}>
                <div className={css.cabin__item__name}>
                    {neededCabin.name}
                </div>
            <div className={css.cabin__item__img}>
                <img src={`/${neededCabin.image}`} alt={neededCabin.name} />
            </div>

            <div className={css.cabin__item__info}>
                <div className={css.cabin__item__info__description}>
                    {isLongDescription && !isShowMore ? neededCabin.description.slice(0, 350) + '...' : neededCabin.description}
                    {isLongDescription && <span onClick={() => setShowMore(!isShowMore)}>Show {isShowMore ? 'less' : 'more'}</span>}
                </div>

                <div className={css.cabin__item__info__details}>
                    <div className={css.cabin__item__info__details__element}>
                        <GuestsIcon/>
                        For up to <b>{neededCabin.maxCapacity}</b> guests
                    </div>
                    <div className={css.cabin__item__info__details__element}>
                        <LocationIcon/>
                        Located in the heart of the Dolomites (Italy)
                    </div>
                    <div className={css.cabin__item__info__details__element}>
                        <PrivacyIcon/>
                        Privacy 100% guaranteed
                    </div>
                </div>
            </div>

        </div>
    )
}