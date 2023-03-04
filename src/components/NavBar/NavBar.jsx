import React from 'react';
import Friends from './Friends/Friends';
import s from './NavBar.module.css';
import NavBarItem from './NavBarItem/NavBarItem';

const NavBar = (props) => {

    let sidebarElements = props.sidebar.map(s => <Friends name={s.name} key={s.id} id={s.id} images={s.images} />);

    return (
        <div className={s.navBar}>
            <nav >
                <NavBarItem />
            </nav>
            <div>
                <h2>Friends</h2>
                <div className={s.friend}>
                    {sidebarElements}
                </div>
            </div>

        </div>
    );
};

export default NavBar