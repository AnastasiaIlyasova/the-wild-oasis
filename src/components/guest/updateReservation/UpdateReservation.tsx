import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Title } from "../../../shared/ui/Title";
import { FormEvent, useState } from "react";
import { mockCabins } from "../../../mocksData/cabins";
import { useDispatch } from "react-redux";
import { updateReservation } from "../../../slices/ReservationSlice";
import { FormElement } from "../../../shared/ui/formElement";

export const UpdateReservation = () => {
    const { id } = useParams();
    const reservations = useAppSelector(store => store.reservations.reservations);
    const updatedReservation = reservations.filter((item) => item.cabinId === Number(id))[0];
    const reservedCabin = mockCabins.filter((item) => item.id === Number(id))[0];
    const [guestsAmount, setGuestsAmount] = useState<string>(updatedReservation.guestsAmount.toString() || '');
    const options = Array.from({ length: reservedCabin.maxCapacity }, (_, i) => (i + 1).toString() + ` guest${i + 1 > 1 ? 's' : ''}`);
    const [additionalComments, setAdditionalComments] = useState(updatedReservation.additionalComments || "");
    const dispath = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispath(updateReservation({cabinId: updatedReservation.cabinId, guestsAmount: parseInt(guestsAmount.match(/\d+/)![0]), additionalComments}));

        navigate(`/guest/reservations`);
    }

    return (
        <div>
            <Title title={`Edit Reservation Cabin #${id}`} fontSize={24}/>

            <FormElement
                onSubmit={handleSubmit}
                options={options}
                placeholderSelect={updatedReservation.guestsAmount + `${updatedReservation.guestsAmount > 1 ? ' guests' : ' guest'}`}
                placeholderTextArea={updatedReservation.additionalComments ? updatedReservation.additionalComments : 'Any pets, allergies, special requirements, etc.?'}
                onChangeSelect={setGuestsAmount}
                onChangeTextArea={e => setAdditionalComments(e.target.value)}
                additionalComments={additionalComments}
                buttonText='Update reservation'
            />
        </div>
    )
}