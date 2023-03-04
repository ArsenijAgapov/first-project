const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs: [
        { id: 1, name: 'Arseniy', images: 'https://e7.pngegg.com/pngimages/577/307/png-clipart-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company.png' },
        { id: 3, name: 'Liza', images: 'https://e7.pngegg.com/pngimages/577/307/png-clipart-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company.png' },
        { id: 4, name: 'Nikita', images: 'https://e7.pngegg.com/pngimages/577/307/png-clipart-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company.png' },
        { id: 5, name: 'Danial', images: 'https://e7.pngegg.com/pngimages/577/307/png-clipart-human-with-circle-logo-national-cyber-security-alliance-organization-drupal-association-information-internet-icon-s-customers-free-miscellaneous-company.png' }
    ],

    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Yes' }
    ],

    newMessageText: ''
};

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, { id: 4, message: text }]
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state
    }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })

export default dialogsPageReducer;