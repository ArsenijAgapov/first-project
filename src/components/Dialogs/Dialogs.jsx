import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} images={d.images} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />);
    let newMessageText = state.newMessageText

    let sendMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageTextCreator(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.massages}>
                <div>
                    {messagesElements}
                </div>
                <div className={s.messageLine}>
                    <div>
                        <textarea onChange={onMessageChange} value={newMessageText} placeholder='Enter your message' />
                    </div>
                    <div>
                        <Stack direction="row">
                            <Button onClick={sendMessage} variant="contained" endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs