import { FC } from 'react';
import './Header.scss';

import { Header as HeaderMain } from '@consta/uikit/Header';

import HeaderMenu from './HeaderMenu';
import HeaderTitle from './HeaderTitle';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import HeaderUser from './HeaderUser/HeaderUser';

const Header: FC = () => {

    return (
        <>
            <HeaderMain
                className='header'
                leftSide={
                    <>
                        <HeaderTitle />
                        <HeaderMenu />
                    </>
                }
                rightSide={
                    <>
                        <HeaderButtons />
                        <HeaderUser />
                    </>
                }
            />
        </>
    )
}

export default Header;
