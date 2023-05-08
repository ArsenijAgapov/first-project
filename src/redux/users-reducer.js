const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UN_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USER:
            return {
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }

        default:
            return state
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unFollow = (userId) => ({ type: UN_FOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USER, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })

export default usersReducer;

