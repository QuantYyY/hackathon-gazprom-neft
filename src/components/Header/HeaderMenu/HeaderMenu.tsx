import { FC } from 'react';
import { HeaderModule, HeaderMenu as HeaderTabs } from '@consta/uikit/Header';

import { useAppDispatch, useAppSelector } from '../../../hook';
import { changeHeaderTab } from '../../../store/headerSlice';

const HeaderMenu: FC = () => {

    const dispatch = useAppDispatch();
    const store = useAppSelector(store => store.header);

    let menuItems = [
        {
            label: 'Моё обучение',
            onClick: () => {
                dispatch(changeHeaderTab('Моё обучение'));       
            },
            active: store.selectedTab === 'Моё обучение',
        },
        {
            label: 'Задачи',
            onClick: () => {
                dispatch(changeHeaderTab('Задачи'));
            },
            active: store.selectedTab === 'Задачи',
        },
        {
            label: 'Локация',
            onClick: () => {
                dispatch(changeHeaderTab('Локация'));
            },
            active: store.selectedTab === 'Локация',
        },
        {
            label: 'Запросы к API',
            onClick: () => {
                dispatch(changeHeaderTab('Запросы к API'));
            },
            active: store.selectedTab === 'Запросы к API',
        }
    ];

    return (
        <>
            <HeaderModule indent="l">
                <HeaderTabs items={menuItems} />
            </HeaderModule>
        </>
    )
}

export default HeaderMenu;