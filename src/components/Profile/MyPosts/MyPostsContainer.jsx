import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts'
import { connect } from 'react-redux';

// const MyPostsContainers = (props) => {

//     let addPost = () => {
//         props.store.dispatch(addPostCreator())
//     };

//     let onPostChange = (text) => {
//         let action = updateNewPostTextCreator(text);
//         props.store.dispatch(action)
//     };

//     return <MyPosts updateNewPostTextCreator={onPostChange} PostCreator={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    
// };

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action)
        }
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer