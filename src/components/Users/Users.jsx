import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import userPhoto from '../../assets/user.png'

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span key={p.id} className={props.currentPage === p && s.selectedPage} onClick={() => { props.onPageChanged(p); }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u =>
                <div key={u.id}>
                    <div>
                        <div >
                            <NavLink to={'/profile/ + u.id'} >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.img} />
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unFollow(u.id) }} >Un Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className={s.text}>{u.name}</div>
                            <div className={s.text}>{u.status}</div>
                        </div>
                        <div>
                            <div className={s.text}>{"u.location.country"}</div>
                            <div className={s.text}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
}

export default Users