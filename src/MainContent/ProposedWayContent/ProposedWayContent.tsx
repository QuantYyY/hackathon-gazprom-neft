import { FC, useEffect } from 'react';

import { Carousel } from '@trendyol-js/react-carousel';
import ContentCard from './ContentCard.tsx/index.js';
import { ContentCardProps } from './ContentCard.tsx/ContentCardProps.js';
import { Button } from '@consta/uikit/Button/index.js';

const ProposedWayContent: FC = () => {

    const data: ContentCardProps = {
        title: "Добро пожаловать!",
        categories: "Для новичка • Основы работы",
        info: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
        status: "not-started",
        taskCounter: "254"
    }

    let rightArrow = document.querySelector('.rightArrow') as HTMLElement;
    let leftArrow = document.querySelector('.leftArrow') as HTMLElement;

    useEffect(() => {
        rightArrow = document.querySelector('.rightArrow') as HTMLElement;
        leftArrow = document.querySelector('.leftArrow') as HTMLElement;

        if (rightArrow) {
            rightArrow.style.display = 'none';
        }

        if (leftArrow) {
            leftArrow.style.display = 'none';
        }
    })

    const clickLeftArrow = () => {
        if (leftArrow) {
            leftArrow.click();
        }
    }

    const clickRightArrow = () => {
        if (rightArrow) {
            rightArrow.click();
        }
    }

    return (
        <>

            <Button onClick={clickLeftArrow} />
            <Button onClick={clickRightArrow} />

            <Carousel
                show={2.9}
                slide={3}
                rightArrow={<Button className='rightArrow' />}
                leftArrow={<Button className='leftArrow' />}
            >
                <ContentCard {...data} />
                <ContentCard {...data} />
                <ContentCard {...data} />
                <ContentCard {...data} />
            </Carousel>
        </>
    );
}

export default ProposedWayContent;