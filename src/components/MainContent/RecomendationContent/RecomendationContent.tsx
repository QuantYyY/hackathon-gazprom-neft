import { FC, useState } from 'react';
import './RecomendationContent.scss';

import ProgressCircle from './ProgressCircle';
import ContentArea from './ContentArea';

import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { Button } from '@consta/uikit/Button';
import { IconDown } from '@consta/uikit/IconDown';
import { IconTop } from '@consta/uikit/IconTop';

const RecomendationContent: FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <>
            <Text view='primary' size='2xl' style={{ paddingBottom: '1.5em' }}>Рекомендуемые темы</Text>

            {isOpen ? (
                <>
                    <Card className='recomendationCard' style={{borderRadius: '0.5em'}}>
                        <ProgressCircle />
                        <ContentArea />
                    </Card>

                    <Card className='recomendationCard' style={{borderRadius: '0.5em'}}>
                        <ProgressCircle />
                        <ContentArea />
                    </Card>

                    <div className="line-container">
                        <hr className="line l" />
                        <Button label="скрыть"
                            iconRight={IconTop}
                            view='ghost'
                            size='m'
                            onClick={() => setOpen(!isOpen)}
                        />
                        <hr className="line r" />
                    </div>
                </>
            ) : (
                <>
                    <Card className='recomendationCard' style={{borderRadius: '0.5em'}}>
                        <ProgressCircle />
                        <ContentArea />
                    </Card>

                    <div className="line-container">
                        <hr className="line l" />
                        <Button label="Показать ещё"
                            iconRight={IconDown}
                            view='ghost'
                            size='m'
                            onClick={() => setOpen(!isOpen)}
                        />
                        <hr className="line r" />
                    </div>
                </>
            )}

        </>
    );
}

export default RecomendationContent;
