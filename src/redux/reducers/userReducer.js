import { ActionTypes } from '../constants/actionTypes'

const tokenInitialState = {
    token: "",
}
export const setTokenReducer = ( state= tokenInitialState, { type, payload }) => {
    switch (type){
        case ActionTypes.SET_TOKEN:
            return {token:payload}
        case ActionTypes.REMOVE_TOKEN:
            return ""
        default:
            return state
    }
}

const userInitialState = {
    nickname: "",
}

export const setUserNicknameReducer = ( state=userInitialState, { type, payload }) => {
    switch (type){
        case ActionTypes.SET_USER_NICKNAME:
            return {nickname:payload}
        case ActionTypes.REMOVE_USER_NICKNAME:
            return ""
        default:
            return state
    }
}