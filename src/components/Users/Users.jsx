import React from "react";
import axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../assets/user.png'

class Users extends React.Component {

    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUser(response.data.items)
            console.log(123)
            });
    }

    // constructor(props) {
    //     super(props)

    //     let getState = () => {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then(response => {
    //             this.props.setUser(response.data.items)
    //         });
    //     } 
    // }

    render() {
        return <div>
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                        <div> 
                            <div >
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.img} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
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