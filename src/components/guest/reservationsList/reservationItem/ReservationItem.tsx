import {FC, useState} from "react";
import {Reservation} from "../../../../model/reservation/reservation.model";
import {mockCabins} from "../../../../mocksData/cabins";
import css from "./reservationItem.module.scss"
import {EditIcon} from "../../../../shared/icons/EditIcon";
import {DeleteIcon} from "../../../../shared/icons/DeleteIcon";
import { useDispatch } from "react-redux";
import { deleteReservation } from "../../../../slices/ReservationSlice";
import { useNavigate } from "react-router-dom";
import PortalModal from "../../../../shared/ui/portalModal/PortalModal";
import { Button } from "../../../../shared/ui/button";

type ReservationItemProps = {
    item: Reservation;
}

export const ReservationItem:FC<ReservationItemProps> = ({ item }) => {
    const currentCabin = mockCabins.filter((cabin) => cabin.id === item.cabinId)[0];
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [isOpendeletePopup, setIsOpenDeletePopup] = useState(false);

    const handleUpdateReservation = () => {
        navigate(`/guest/reservation/update/${item.cabinId}`);
    }

    const handleDeleteReservation = () => {
        dispath(deleteReservation(item.cabinId));

        setIsOpenDeletePopup(false);
    }

    return (
        <>
            <div className={css.container}>
                <img src={`/${currentCabin.image}`} alt='cabin-image'/>

                <div className={css.info}>
                    <p>{item.nightsAmount} nights in Cabin {item.cabinId}</p>

                    <div className={css.label}>upcoming</div>

                    <span>{item.startDate} - {item.endDate}</span>

                    <div className={css.info__additional}>
                        <div className={css.info__additional__left}>
                            <p className={css.info__additional__left__price}>${item.price.toLocaleString('de-DE')}</p>
                            <span>•</span>
                            <p className={css.info__additional__left__guests}>{item.guestsAmount} {item.guestsAmount === 1 ? 'guest' : 'guests'}</p>
                        </div>

                        <p className={css.info__additional__booked}>Booked {item.bookedDate}</p>
                    </div>
                </div>

                <div className={css.actions}>
                    <div className={css.actions__block} onClick={handleUpdateReservation}>
                        <EditIcon/>
                        <span>EDIT</span>
                    </div>

                    <div className={css.actions__block} onClick={() => setIsOpenDeletePopup(true)}>
                        <DeleteIcon/>
                        <span>DELETE</span>
                    </div>
                </div>
            </div>

            {isOpendeletePopup && (
                <PortalModal onClose={() => setIsOpenDeletePopup(false)}>
                    <div className={css.popup__text}>
                        Are you sure you want to delete this reservation?
                    </div>

                    <div className={css.popup__actions}>
                        <Button buttonText='Yes' onClick={handleDeleteReservation} className={css.popup__button}/>
                        <Button buttonText='No'  onClick={() => setIsOpenDeletePopup(false)} className={css.popup__button}/>
                    </div>
                </PortalModal>
            )}
        </>

    )
}