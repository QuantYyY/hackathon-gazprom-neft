import { FC } from "react";

import SearchCompanyCombox from './SearchCompanyCombox';
import SearchCompanyList from "./SearchCompanyList/SearchCompanyList";


const CompanySearchPage: FC = () => {

    return (
        <>
            <div className="content">
                <SearchCompanyCombox />
                <SearchCompanyList />
            </div>
        </>
    );
}

export default CompanySearchPage;