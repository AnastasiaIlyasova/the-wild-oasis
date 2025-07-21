import { TextBlock } from "../../../shared/ui/textBlock";
import { Title } from "../../../shared/ui/Title";
import { Filters } from "./filters";
import css from './infoBlock.module.scss';

export const InfoBlock = () => {
    return (
        <>
            <Title title="Our Luxury Cabins" className={css.title}/>
            <TextBlock text="Cozy yet luxurious cabins, located right in the heart of the Italian Dolomites. Imagine waking up to beautiful mountain views, spending your days exploring the dark forests around, or just relaxing in your private hot tub under the stars. Enjoy nature's beauty in your own little home away from home. The perfect spot for a peaceful, calm vacation. Welcome to paradise."/>
            <Filters/>
        </>
    );
}