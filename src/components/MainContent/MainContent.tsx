import { FC } from 'react';
import './MainContent.scss';

import RecomendationContent from './RecomendationContent';
import ProposedWayContent from './ProposedWayContent';
import CatalogContent from './CatalogContent/CatalogContent';

const MainContent: FC = () => {

    return (
        <>
            <div className='mainArea'>
                <div className='content'>
                    <RecomendationContent />
                    <ProposedWayContent />
                    <CatalogContent />
                </div>
            </div>
        </>
    )

}

export default MainContent;