import { TableItem } from "./tableItem";
import css from "./tableList.module.scss";
import { mockItems } from '../../../mocksData/itemsAbout';

export const TableList = () => {
    return (
        <div className={css.table__list__container}>
            <div className={css.table__list}>
                {mockItems.map((item, index) => <TableItem item={item} key={index} index={index}/>)}
            </div>
        </div>
    );
}