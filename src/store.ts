import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./slices/ReservationSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;