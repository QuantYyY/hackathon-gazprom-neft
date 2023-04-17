import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Combobox } from "@consta/uikit/Combobox";

import { useAppDispatch, useAppSelector } from "../../../hook";
import { setCurrentCompany, resultObject, getCompany, getCompanyUseINN } from "../../../store/companySearchSlice";

const SearchAddressCombox: FC = () => {
    const store = useAppSelector(store => store.companySearch);
    const dispatch = useAppDispatch();

    const [value, setValue] = useState<resultObject | null>();

    useEffect(() => {
        console.log(store.companyList);
    }, [store.companyList]);

    return (
        <>
            <Combobox
                style={{ paddingBottom: '0.5em' }}
                items={store.companyTips}
                value={value}
                placeholder="Введите параметры организации"
                onChange={({ value }) => {
                    setValue(value)
                    if (value !== null) {
                        dispatch(setCurrentCompany(value))
                        dispatch(getCompanyUseINN(value.data.inn))
                    } else if (value === null) {
                        dispatch(getCompany(''));
                        dispatch(setCurrentCompany({} as resultObject))
                    }
                }}
                searchFunction={() => {
                    return (store.companyTips.length !== 0)
                }}
                onInputChange={({ value }) => {
                    dispatch(getCompany(value as string));
                }}
                getItemKey={() => uuidv4()}
                getItemLabel={(item) => item.value}
            />
        </>
    );
}

export default SearchAddressCombox;