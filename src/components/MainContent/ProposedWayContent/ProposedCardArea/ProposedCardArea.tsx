import { FC, useEffect, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Card } from '@consta/uikit/Card';
import { Button } from '@consta/uikit/Button/index.js';
import { Carousel } from '@trendyol-js/react-carousel';

import './ProposedCardArea.scss';
import ContentCard from '../ContentCard/ContentCard';
import CardTitle from './CardTitle/CardTitle';
import { useAppSelector } from '../../../../hook';
import DataArray from './DataArray/DataArray';

const ProposedCardArea: FC = () => {
    const store = useAppSelector(store => store.proposedWay);

    return (
            <Card className='proposedWayCard'>
                <CardTitle />
                {store.hidden ?
                    (
                        <Carousel
                            show={2.9}
                            slide={1}
                            rightArrow={<Button className='rightArrow' />}
                            leftArrow={<Button className='leftArrow' />}
                            dynamic={true}
                        >

                            {DataArray.filter(el => el.status !== 'finished').map(data => (
                                <ContentCard {...data} key={uuidv4()} />
                            ))}

                        </Carousel>
                    ) :
                    (
                        <Carousel
                            show={2.9}
                            slide={1}
                            rightArrow={<Button className='rightArrow' />}
                            leftArrow={<Button className='leftArrow' />}
                            dynamic={true}
                        >
                            {DataArray.map(data => (
                                <ContentCard {...data} key={uuidv4()} />
                            ))}
                        </Carousel>
                    )
                }
            </Card>
    );
}

export default ProposedCardArea;

