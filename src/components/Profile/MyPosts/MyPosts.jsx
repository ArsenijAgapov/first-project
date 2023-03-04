import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} id={p.id} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={s.postsBlok}>
            <h2>My post</h2>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <Stack direction="row">
                        <Button onClick={onAddPost} variant="contained" endIcon={<SendIcon />}>
                            Add Post
                        </Button>
                    </Stack>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>

        </div>
    );
};

export default MyPosts