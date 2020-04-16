import React from 'react';
import './Notify.css';

const Notify = ({data, position}) => {
    return data.type === 'success' ? (
        <div className={position}>
            <div className='notify-success'>
                {data.message}
            </div>
        </div>
    ) : (
        <div className={position}>
            <div className='notify-error'>
                {data.message}
            </div>
        </div>
    )
}

export default Notify