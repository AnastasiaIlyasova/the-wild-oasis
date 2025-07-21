import css from './reserveDetails.module.scss'
import { FC, useState, FormEvent } from "react";
import { Button } from "../../../../shared/ui/button/Button";
import PortalModal from '../../../../shared/ui/portalModal/PortalModal'
import { useDispatch } from "react-redux";
import { createReservation } from '../../../../slices/ReservationSlice'
import { Link } from "react-router-dom";
import { FormElement } from '../../../../shared/ui/formElement';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type ReserveDetailsProps = {
    maxCapacity: number;
    range: Value;
    neededCabinId: number;
    nightsAmount: number | null;
    sum: number;
}

export const ReserveDetails:FC<ReserveDetailsProps> = ({ maxCapacity, range, neededCabinId, nightsAmount, sum }) => {
    const dispatch = useDispatch();
    const [reservationCreatedPopup, setReservationCreatedPopup] = useState(false);
    const [additionalComments, setAdditionalComments] = useState("");
    const [guestsAmount, setGuestsAmount] = useState<string>('');
    const options = Array.from({ length: maxCapacity }, (_, i) => (i + 1).toString() + ` guest${i + 1 > 1 ? 's' : ''}`);
    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };
    const [error, setError] = useState('');

    const isRangeArray = (range: Date | [ValuePiece, ValuePiece]): range is [ValuePiece, ValuePiece] => {
        return Array.isArray(range);
    }

    const formattedDate = (date: Date, areHoursNeeded: boolean) => {
        return date.toLocaleString('en-US', areHoursNeeded ? dateOptions : {...dateOptions, hour: undefined, minute: undefined, hour12: undefined})
            .replace(',', '')
            .replace(/(\d{4}),/, '$1');
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!guestsAmount) {
            setError('Please select number of guests');

            return;
        } else if (range && isRangeArray(range) && !range[1]) {
            setError('Please select full date');

            return;
        } else {
            setError('');
        }

        const numberOfGuests = parseInt(guestsAmount.match(/\d+/)![0]);

        const newReservation = {
            nightsAmount: nightsAmount ? nightsAmount : 0,
            cabinId: neededCabinId,
            guestsAmount: numberOfGuests,
            startDate: range && isRangeArray(range) && range[0] ? formattedDate(range[0], false) : '',
            endDate: range && isRangeArray(range) && range[1] ? formattedDate(range[1], false) : '',
            bookedDate: formattedDate(new Date(), true),
            additionalComments: additionalComments ? additionalComments : '',
            price: sum,
        };

        dispatch(createReservation(newReservation));

        setReservationCreatedPopup(true);
    }

    return (
        <>
            <FormElement
                onSubmit={handleSubmit}
                options={options}
                placeholderSelect='Select number of guests...'
                placeholderTextArea='Any pets, allergies, special requirements, etc.?'
                onChangeSelect={setGuestsAmount}
                onChangeTextArea={e => setAdditionalComments(e.target.value)}
                additionalComments={additionalComments}
                buttonText='Reserve now'
                error={error}
            />

            {reservationCreatedPopup && (
                <PortalModal onClose={() => setReservationCreatedPopup(false)}>
                    <div className={css.popup__text}>
                        Reservation request<br/> was created
                    </div>

                    <Link to="/guest/reservations">
                        <Button buttonText='Check reservation' className={css.button__check}/>
                    </Link>
                </PortalModal>
            )}
        </>
    )
}