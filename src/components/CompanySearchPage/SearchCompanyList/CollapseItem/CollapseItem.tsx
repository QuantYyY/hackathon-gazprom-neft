import { FC, useState } from "react";
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { v4 as uuidv4 } from 'uuid';

import { Collapse } from '@consta/uikit/Collapse';
import { Text } from '@consta/uikit/Text';

import { resultObject } from "../../../../store/companySearchSlice";
import { GetStatusValue } from "./HelpfulFunctions/GetStatusValue";

const CollapseItem: FC<resultObject> = (props) => {

    const [isOpen, setOpen] = useState<boolean>(false);


    return (
        <>
            {props ? (
                <Collapse
                    label={props.value}
                    view="primary"
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                >
                    <Text view="primary"><Text as="span" view="secondary">ИНН:</Text> {props.data.inn}</Text>
                    <Text view="primary"><Text as="span" view="secondary">Адрес:</Text> {props.data.address.value}</Text>
                    <Text view="primary"><Text as="span" view="secondary">Статус:</Text> {GetStatusValue(props.data.state.status)}</Text>
                    {props.data.state.registration_date ? (
                        <Text view="primary"><Text as="span" view="secondary">Дата основания:</Text> {dayjs(props.data.state.registration_date).locale('ru').format('D MMMM YYYY')}</Text>
                    ) : (<></>)}
                    {props.data.state.liquidation_date ? (
                        <Text view="primary"><Text as="span" view="secondary">Дата ликвидации:</Text> {dayjs(props.data.state.liquidation_date).locale('ru').format('D MMMM YYYY')}</Text>
                    ) : (<></>)}
                    {props.data.founders ? (
                        <>
                            <Text as="span" view="secondary">Основатели:</Text>
                            {props.data.founders.map(el =>(
                                <Text view="primary" key={uuidv4()}>&nbsp;&nbsp;&nbsp;&nbsp;{el.name}</Text>
                            ))}
                        </>
                    ) : (<></>)}


                </Collapse>
            ) :
                (<></>)}
        </>
    );
}

export default CollapseItem;