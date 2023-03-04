import React from 'react';
import s from './Music.module.css';
import Play from './Play/Play';

const Music = (props) => {

    let musicsElement = props.musics.map(m => <Play name={m.name} time={m.time} key={m.id} id={m.id}/>)

    return (
        <div className={s.item}>
            {musicsElement}
        </div>
    );
};

export default Music