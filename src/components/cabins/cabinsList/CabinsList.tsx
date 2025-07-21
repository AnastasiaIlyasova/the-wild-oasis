import css from './cabinsList.module.scss';
import { ListItem } from './listItem';
import { mockCabins } from '../../../mocksData/cabins';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export const CabinsList = () => {
    const [searchParams] = useSearchParams();
    const capacity = searchParams.get('capacity');

    const filteredCabins = useMemo(() => {
        switch (capacity) {
            case 'small':
                return mockCabins.filter(cabin => cabin.maxCapacity < 3);
            case 'medium':
                return mockCabins.filter(cabin => cabin.maxCapacity >= 3 && cabin.maxCapacity < 8);
            case 'large':
                return mockCabins.filter(cabin => cabin.maxCapacity >= 8 && cabin.maxCapacity <= 12);
            case 'all':
            case null:
                return mockCabins;
            default:
                return mockCabins;
        }
    }, [capacity]);

    return (
        <div className={css.cabins__list}>
            {filteredCabins.map(item => (
                <ListItem key={item.id} item={item} />
            ))}
        </div>
    );
};
