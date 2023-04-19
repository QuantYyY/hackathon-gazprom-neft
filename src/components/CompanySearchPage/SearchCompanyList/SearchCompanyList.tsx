import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

import CollapseItem from "./CollapseItem/CollapseItem";
import { useAppSelector } from "../../../hook";

const SearchCompanyList: FC = () => {

    const store = useAppSelector(store => store.companySearch);

    return (
        <>
            {store.companyList ?
                (
                    <>
                        {store.companyList.map(el => (
                            <CollapseItem {...el} key={uuidv4()}/>
                        ))}
                    </>
                )
                :
                (<></>)}
        </>
    );
}

export default SearchCompanyList;