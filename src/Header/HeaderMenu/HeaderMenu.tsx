import { FC } from 'react';
import { HeaderModule, HeaderMenu as HeaderTabs } from '@consta/uikit/Header';

const HeaderMenu: FC = () => {

    const menuItems = [
        {
            label: 'Моё обучение',
        },
        {
            label: 'Задачи',
        },
        {
            label: 'Локация',
        },
        {
            label: 'Запросы к API',
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