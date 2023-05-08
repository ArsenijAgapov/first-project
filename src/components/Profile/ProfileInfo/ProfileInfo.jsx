import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div></div>
    }

    return (
        <div>
            <div>
                <img className={s.img} src='https://rare-gallery.com/mocahbig/428723-video-games-video-game-art-digital-art-Genshin-Impact.jpg'></img>
            </div>
            <div className={s.descriptionBlok}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo

