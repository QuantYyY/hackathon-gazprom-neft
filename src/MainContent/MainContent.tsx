import { FC } from 'react';
import './MainContent.scss';

import RecomendationContent from './RecomendationContent';
import ProposedWayContent from './ProposedWayContent';

const MainContent: FC = () => {

    return (
        <>
            <div className='mainArea'>
                <div className='content'>
                    <RecomendationContent />
                    <ProposedWayContent />
                </div>
            </div>
        </>
    )

}

export default MainContent;