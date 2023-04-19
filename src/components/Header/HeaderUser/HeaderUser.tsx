import { FC } from "react";
import { HeaderModule, HeaderLogin } from '@consta/uikit/Header';
import './HeaderUser.scss';

const HeaderUser: FC = () => {

    return (
        <>
            <HeaderModule indent='s'>
                <HeaderLogin
                    isLogged={true}
                    personName='Михаил Романов'
                    personAvatarUrl='../../static/images/user-photo.png'
                />
            </HeaderModule>
        </>
    );
}

export default HeaderUser;