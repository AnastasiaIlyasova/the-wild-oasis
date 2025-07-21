import { useParams } from "react-router-dom";
import { CabinItem } from "../components/cabin/cabinItem/CabinItem";
import { Container } from "../shared/ui/container";
import { mockCabins } from "../mocksData/cabins";
import {ReserveBlock} from "../components/cabin/reserveBlock/ReserveBlock";

export const Cabin = () => {
    const { id } = useParams();
    const neededCabin = mockCabins.filter(item => item.id === Number(id))[0];

    return (
        <Container>
            <CabinItem neededCabin={neededCabin}/>
            <ReserveBlock neededCabin={neededCabin}/>
        </Container>
    )
}

