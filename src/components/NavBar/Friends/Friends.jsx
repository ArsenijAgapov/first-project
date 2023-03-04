import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {

    return (
        <div className={s.friend}>
            <div className={s.friends}>
                <img src={props.images} alt="" />
            </div>
            <div className={s.friends}>
                {props.name}
            </div>
        </div>
    );
};

export default Friends