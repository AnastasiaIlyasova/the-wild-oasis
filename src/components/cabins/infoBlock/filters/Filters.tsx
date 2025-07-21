import { useState } from "react";
import css from "./filters.module.scss";
import { useSearchParams } from "react-router-dom";

export const Filters = () => {
    const [activeTab, setActiveTab] = useState(0);

    const [, setSearchParams] = useSearchParams();

    const handleChangeTab = (tab: number, value: string) => {
        setActiveTab(tab);

        setSearchParams((prev) => {
            prev.set('capacity', value);
            
            return prev;
        });
    }

    return (
        <div className={css.filters__container}>
            <div className={css.filters}>
                <button className={activeTab === 1 ? css.filters__active : ''} onClick={() => handleChangeTab(1, 'all')}>All cabins</button>
                <button className={activeTab === 2 ? css.filters__active : ''} onClick={() => handleChangeTab(2, 'small')}>2—3 guests</button>
                <button className={activeTab === 3 ? css.filters__active : ''}onClick={() => handleChangeTab(3, 'medium')}>4—7 guests</button>
                <button className={activeTab === 4 ? css.filters__active : ''} onClick={() => handleChangeTab(4, 'large')}>8—12 guests</button>
            </div>
        </div>
    );
}