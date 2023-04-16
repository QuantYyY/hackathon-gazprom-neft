import { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { Combobox } from '@consta/uikit/Combobox';
import { Button } from "@consta/uikit/Button";

import { useAppDispatch, useAppSelector } from "../../hook";
import { getAddress } from "../../store/companySearchSlice";
import { companySearchObject } from "../../store/companySearchSlice";

const CompanySearchPage: FC = () => {

    const store = useAppSelector(store => store.companySearch);
    const dispatch = useAppDispatch();



    return (
        <>
            {/* <Combobox
                items={items}
                value={value}
                placeholder="Выберите что-нибудь хорошее"
            /> */}

            {/* <Button label='отправить' onClick={() => {
                dispatch(getAddress('уфа'));
            }} /> */}

        </>
    );
}

export default CompanySearchPage;