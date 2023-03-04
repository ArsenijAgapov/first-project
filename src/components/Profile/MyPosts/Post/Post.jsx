import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://e7.pngegg.com/pngimages/577/307/png-clipart-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company.png" alt="" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post