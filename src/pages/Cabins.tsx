import { CabinsList } from "../components/cabins/cabinsList";
import { InfoBlock } from "../components/cabins/infoBlock";
import { Container } from "../shared/ui/container";

export const Cabins = () => {
    return (
        <Container>
            <InfoBlock/>
            <CabinsList/>
        </Container>
    )
}

