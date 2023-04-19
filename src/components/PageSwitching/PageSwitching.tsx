import { FC } from 'react';

import MainContent from '../MainContent/MainContent';
import CompanySearchPage from '../CompanySearchPage/CompanySearchPage';

import { useAppSelector } from '../../hook';
import LocationPage from '../LocationPage';

const PageSwitching: FC = () => {

    const store = useAppSelector(store => store.header)

    return (
        <>
            {store.selectedTab === 'Моё обучение' ?
                (<>
                    <MainContent />
                </>) 
                : store.selectedTab === 'Локация' ? 
                (<>
                    <LocationPage />
                </>) 
                : store.selectedTab === 'Запросы к API' ?
                (<>
                    <CompanySearchPage />
                </>) : (<> </>)
            }
        </>
    );
}

export default PageSwitching;