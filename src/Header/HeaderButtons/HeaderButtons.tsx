import { FC } from 'react';
import { HeaderModule, HeaderButton } from '@consta/uikit/Header';

import { IconRing } from '@consta/uikit/IconRing';
import { IconQuestion } from '@consta/uikit/IconQuestion';
import { IconSun } from '@consta/uikit/IconSun';

const HeaderButtons: FC = () => {
    return (
        <>
            <HeaderModule indent="s">
                <HeaderButton iconLeft={IconRing} />
            </HeaderModule>
            <HeaderModule indent="s">
                <HeaderButton iconLeft={IconQuestion} />
            </HeaderModule>
            <HeaderModule indent="s">
                <HeaderButton iconLeft={IconSun} />
            </HeaderModule>
        </>
    );
}

export default HeaderButtons;