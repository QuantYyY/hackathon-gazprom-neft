import { FC } from "react";

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';

import { useAppDispatch, useAppSelector } from "../../../../hook";
import { selectedItem } from "../../../../store/catalogSlice";
import { changeCatalogItem } from "../../../../store/catalogSlice";


const CatalogButtonGroup: FC = () => {
    const dispatch = useAppDispatch();

    const store = useAppSelector(store => store.catalog);

    const items: selectedItem[] = ['Все', 'Рабочая среда', 'Библиотеки', 'Пройденые', 'Не пройденные'];

    const setValue = (value: selectedItem) => {
        dispatch(changeCatalogItem(value))
    };

    return (
        <>
            <ChoiceGroup
                value={store.selectedItem}
                onChange={({ value }) => setValue(value as selectedItem)}
                items={items}
                getItemLabel={(item: selectedItem) => item}
                multiple={false}
                view="ghost"
                name="ChoiceGroupCatalog"
                style={{ marginBottom: '1.5em' }}
            />
        </>
    );
}

export default CatalogButtonGroup;