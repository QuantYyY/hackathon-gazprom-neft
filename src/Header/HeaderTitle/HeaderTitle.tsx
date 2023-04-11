import { FC } from 'react';
import { HeaderModule, HeaderLogo } from '@consta/uikit/Header';
import { Text } from '@consta/uikit/Text';

const HeaderTitle: FC = () => {

    return (
        <>
            <HeaderModule>
                <HeaderLogo>
                    <Text>
                        Портал Разработчика
                    </Text>
                </HeaderLogo>
            </HeaderModule>
        </>
    );
}

export default HeaderTitle;