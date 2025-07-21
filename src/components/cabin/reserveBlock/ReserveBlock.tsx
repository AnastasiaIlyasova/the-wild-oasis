import { Title } from "../../../shared/ui/Title/Title";
import { CabinItem } from "../../../model/cabinItem/cabinItem.model";
import { FC, useState} from "react";
import Calendar from "react-calendar";
import '../../../styles/reactCalendar.scss';
import { ReserveDetails } from "./reserveDetails/ReserveDetails";
import css from './reserveBlock.module.scss'
import { SummaryBlock } from "./summaryBlock";

type ReserveBlockProps = {
    neededCabin: CabinItem;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ReserveBlock:FC<ReserveBlockProps> = ({ neededCabin }) => {
    const [range, setRange] = useState<Value>([null, null]);
    const [sum, setSum] = useState(0);

    const getNumberOfNights = (range: Value): number | null => {
        if (!Array.isArray(range)) return null;

        const [start, end] = range;
        if (!start || !end) return null;

        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

        return diffDays > 0 ? diffDays : 0;
    };


    const handleClickDay = (value: Date) => {
        if (range && Array.isArray(range) &&
            range[0] &&
            range[1] &&
            value.getTime() >= range[0].getTime() &&
            value.getTime() <= range[1].getTime()
        ) {
            setRange([null, null]);
        } else {
            setRange([value, null]);
        }
    };

    return (
        <>
            <Title title={`Reserve 00${neededCabin.id} today. Pay on arrival.`} fontSize="48px" textAlign="center"/>

            <div className={css.info__container}>
                <div>
                    <Calendar onChange={setRange} value={range} className="my-calendar" locale="en-US" selectRange={true} showDoubleView={true} onClickDay={handleClickDay}/>

                    {Array.isArray(range) && range[0] && (
                        <SummaryBlock
                            pricePerNight={neededCabin.discount ? neededCabin.discount : neededCabin.regularPrice}
                            nightsAmount={getNumberOfNights(range)}
                            setSum={setSum}
                        />
                    )}
                </div>

                <ReserveDetails maxCapacity={neededCabin.maxCapacity} range={range} neededCabinId={neededCabin.id} nightsAmount={getNumberOfNights(range)} sum={sum}/>
            </div>
        </>
    )
}