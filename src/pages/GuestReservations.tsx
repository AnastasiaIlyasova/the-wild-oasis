import {Title} from "../shared/ui/Title/Title";
import {ReservationsList} from "../components/guest/reservationsList/ReservationsList";

export const GuestReservations = () => {
    return (
        <div>
            <Title fontSize='24px' title='Your reservations'/>
            <ReservationsList/>
        </div>
    );
}