export type Reservation = {
    nightsAmount: number;
    cabinId: number;
    guestsAmount: number;
    startDate: string;
    endDate: string;
    bookedDate: string;
    price: number;
    additionalComments?: string;
}
