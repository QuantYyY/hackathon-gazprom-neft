import { FC } from "react";

import { Text } from "@consta/uikit/Text";
import { Button } from '@consta/uikit/Button';
import './ContentArea.scss'

const ContentArea: FC = () => {

    return(
        <>
            <div className="titleArea">
                <Text view="primary" size="3xl">Начало работы</Text>
            </div>
            <div className="secondArea">
                <Text view="secondary">Для новичка • Основы работы</Text>
            </div>
            <div className="contentArea">
                <Text view="primary" size="m">Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</Text>
            </div>
            <div className="buttonArea">
                <Button label="Продолжить тему" />
            </div>
        </>
    );
}

export default ContentArea;