import { FC } from 'react';
import { ContentCardProps } from './ContentCardProps';
import './ContentCard.scss';

import { Card } from '@consta/uikit/Card';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconRestart } from '@consta/uikit/IconRestart';
import { IconCheck } from '@consta/uikit/IconCheck';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppSelector } from '../../../../hook';

const ContentCard: FC<ContentCardProps> = (props) => {

    return (
        <>
            <Card className='contentCard' style={{ borderRadius: '0.5em' }}>
                <Text size='2xl' color='primary'>{props.title}</Text>
                <div className="contentCategories" style={{ paddingTop: '0.5em' }}>
                    <Text view="secondary" size='s'>{props.categories}</Text>
                </div>
                <Text view="primary" size="s" style={{ paddingTop: '0.5em' }}>{props.info}</Text>

                <div style={{ position: 'absolute', bottom: '2em', width: '100%'}}>
                    {
                        props.status === 'finished' ?
                            (<>
                                <div className='iconArea'>
                                    <Button
                                        label='Пройти заново'
                                        view='secondary'
                                        iconLeft={IconRestart}
                                    />

                                    <div className="greenCircle">
                                        <IconCheck size='s' className='circleIcon' />
                                    </div>
                                </div>
                            </>)
                            : props.status === 'started' ?
                                (<>
                                    <div className='iconArea'>
                                        <Button
                                            label='Продолжить тему'
                                        />

                                        <div className="progressSpin">
                                            
                                            <Text size='s' view='primary' >{props.taskCounter}
                                                <Text as='span' size='s' view='secondary'> заданий &nbsp;&nbsp;</Text>

                                                <div style={{width: '24px', height: '24px', display: 'inline-block', verticalAlign: 'bottom'}}>
                                                    <CircularProgressbar
                                                        value={Number(props.taskCounter?.split('/')[0])}
                                                        maxValue={Number(props.taskCounter?.split('/')[1])}
                                                        styles={buildStyles({
                                                            strokeLinecap: 'butt',
                                                            pathColor: '#24C38E',
                                                            trailColor: '#00203314'
                                                        })}
                                                    />
                                                </div>

                                            </Text>
                                            
                                        </div>
                                    </div>
                                </>)
                                :
                                (<>
                                    <div className='iconArea'>
                                        <Button
                                            label='Начать'
                                        />

                                        <div className="progressSpin">
                                            
                                            <Text size='s' view='primary' >{props.taskCounter}
                                                <Text as='span' size='s' view='secondary'> заданий &nbsp;&nbsp;</Text>

                                            </Text>
                                            
                                        </div>
                                    </div>
                                </>)
                    }
                </div>

            </Card>
        </>
    );
}

export default ContentCard;