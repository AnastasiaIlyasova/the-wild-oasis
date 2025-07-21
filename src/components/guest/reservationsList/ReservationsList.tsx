import { ReservationItem } from "./reservationItem/ReservationItem";
import { Reservation } from "../../../model/reservation";
import { useAppSelector } from "../../../hooks/useAppSelector";
import css from "./reservationsList.module.scss"

export const ReservationsList = () => {
    const reservations = useAppSelector(store => store.reservations.reservations);

    if (!reservations.length) return <div className={css.empty__reservations}>You don't have any reservations yet</div>

    return (
        <div>
            {reservations.map((item: Reservation, index) => (
                <ReservationItem key={index} item={item}/>
            ))}
        </div>
    )
}