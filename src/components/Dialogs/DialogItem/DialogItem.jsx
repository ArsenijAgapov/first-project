import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink className={s.link} to={'/dialogs/' + props.id}>
                <div className={s.item}>
                    <img src={props.images} alt="#" />
                </div>
                <div>
                    {props.name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem