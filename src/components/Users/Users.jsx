import React from "react";
import axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/user.png'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                console.log(123)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            });
    }

    render() {
        let pageCount = this.props.totalUsersCount / this.props.pageSize;

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map(p => {
                    return  <span key={p.id} className={this.props.currentPage === p && s.selectedPage} onClick={() => { this.onPageChanged(p); }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <div>
                            <div >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.img} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unFollow(u.id) }} >Un Follow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users