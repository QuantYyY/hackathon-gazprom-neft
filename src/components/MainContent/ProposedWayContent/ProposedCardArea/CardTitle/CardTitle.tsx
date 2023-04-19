import { FC, useEffect } from 'react';

import { Text } from '@consta/uikit/Text';
import { IconForward } from '@consta/uikit/IconForward';
import { IconBackward } from '@consta/uikit/IconBackward';
import { Button } from '@consta/uikit/Button';
import { useAppDispatch, useAppSelector } from '../../../../../hook';
import { changeHidden } from '../../../../../store/proposedWaySlice';

const CardTitle: FC = () => {

    const dispatch = useAppDispatch();
    const store = useAppSelector(store => store.proposedWay);

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
            <div style={{ paddingBottom: '1.5em' }}>
                <Text size='2xl' view='primary' style={{ display: 'inline-block', paddingRight: '2em' }}>
                    Путь Front End Developer
                </Text>

                {store.hidden ?
                    (<>
                        <Button view='ghost' label="Показать пройденные"
                            onClick={() => {
                                dispatch(changeHidden())
                            }} />
                    </>) :
                    (<>
                        <Button view='ghost' label="Скрыть пройденные"
                            onClick={() => {
                                dispatch(changeHidden())
                            }} />
                    </>)}

                <div className='arrowButtons'>
                    <Button
                        label="Вперёд"
                        form='round'
                        view="ghost"
                        iconRight={IconBackward}
                        onlyIcon
                        style={{ marginRight: '0.5em' }}
                        onClick={clickLeftArrow}
                    />
                    <Button
                        label="Вперёд"
                        form='round'
                        view="ghost"
                        iconRight={IconForward}
                        onlyIcon
                        onClick={clickRightArrow}
                    />
                </div>
            </div>
        </>
    );
}

export default CardTitle;