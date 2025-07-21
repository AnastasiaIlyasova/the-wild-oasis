import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Reservation} from "../model/reservation/reservation.model";

interface ReservationsState {
    reservations: Reservation[];
}

const initialState: ReservationsState = {
    reservations: [],
}

const reservationsSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        createReservation(state, action: PayloadAction<Reservation>) {
            state.reservations = [...state.reservations, action.payload];
        },
        deleteReservation(state, action: PayloadAction<number>) {
            state.reservations = state.reservations.filter((item) => item.cabinId !== action.payload)
        },
        updateReservation(state, action: PayloadAction<{cabinId: number, guestsAmount?: number, additionalComments?: string}>) {
            const index = state.reservations.findIndex(r => r.cabinId === action.payload.cabinId);

            if (index !== -1) {
                state.reservations[index] = {
                ...state.reservations[index],
                guestsAmount: action.payload.guestsAmount || state.reservations[index].guestsAmount,
                additionalComments: action.payload.additionalComments || state.reservations[index].additionalComments,
                };
            }
        },
    },
})

export const { createReservation, deleteReservation, updateReservation } =  reservationsSlice.actions
export default reservationsSlice.reducer