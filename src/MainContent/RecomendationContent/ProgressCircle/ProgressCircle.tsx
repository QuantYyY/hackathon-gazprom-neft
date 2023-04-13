import { FC } from "react";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ProgressCircle.scss';

const ProgressCircle: FC = () => {

    return (
        <>
            <div className='progressCircleArea'>
                <div className='progressCircle'>
                    <CircularProgressbarWithChildren
                        value={8}
                        minValue={0}
                        maxValue={10}
                        strokeWidth={9}
                        styles={buildStyles({
                            strokeLinecap: 'butt',
                            pathColor: '#24C38E',
                            trailColor: '#00203314'
                        })}
                    >
                        {
                            <div className='taskCounter'>
                                8/10 <br />
                                <div className='taskName'>заданий</div>
                            </div>
                        }
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </>
    );
}

export default ProgressCircle;