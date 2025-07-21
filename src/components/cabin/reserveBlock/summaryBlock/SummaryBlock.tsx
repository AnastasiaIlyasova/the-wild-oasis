import css from './summaryBlock.module.scss'
import {Dispatch, FC, SetStateAction, useEffect} from "react";

type SummaryBlockProps = {
    pricePerNight: number;
    nightsAmount: number | null;
    setSum: Dispatch<SetStateAction<number>>;
}

export const SummaryBlock:FC<SummaryBlockProps> = ({ pricePerNight, nightsAmount, setSum }) => {
    const sum = pricePerNight * nightsAmount!;

    useEffect(() => {
        if (nightsAmount && nightsAmount > 0) {
            setSum(pricePerNight * nightsAmount);
        } else {
            setSum(0);
        }
    }, [pricePerNight, nightsAmount, setSum]);

    return (
        <div className={css.container}>
            {nightsAmount && nightsAmount > 0 ? (
                <>
                    <div className={css.default__value}>
                        ${pricePerNight}&nbsp;
                        <span>/night</span>
                    </div>

                    <div className={css.nights__amount}>
                    x {nightsAmount}
                    </div>

                    <div className={css.total}>
                    Total <span>${sum.toLocaleString('de-DE')}</span>
                    </div>
                </>
                ) : (
                    <div>You can't pick only 1 day</div>
            )}
        </div>
    )
}