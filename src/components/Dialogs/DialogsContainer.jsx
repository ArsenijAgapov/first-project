import { connect } from 'react-redux';
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/dialogsPageReducer';
import Dialogs from './Dialogs';

// const DialogsContainer = (props) => {

//     let state = props.store.getState().dialogsPage

//     let sendMessage = () => {
//         props.store.dispatch(addMessageCreator());
//     };

//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextCreator(text));
//     };

//     return <Dialogs dialogsPage={state} updateNewMessageTextCreator={onMessageChange} addMessageCreator={sendMessage} />
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageCreator());
        },
        updateNewMessageTextCreator: (text) => {
            dispatch(updateNewMessageTextCreator(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer