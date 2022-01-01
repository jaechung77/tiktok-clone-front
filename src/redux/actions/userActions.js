import { ActionTypes } from "../constants/actionTypes"

export const setToken = (token) => {
    return{
        type: ActionTypes.SET_TOKEN,
        payload: token,
    }
}

export const removeToken = () => {
    return{
        type: ActionTypes.REMOVE_TOKEN,
    }
}

export const setUserNickname = (token) => {
    return{
        type: ActionTypes.SET_USER_NICKNAME,
        payload: token,
    }
}

export const removeUserNickname = () => {
    return{
        type: ActionTypes.REMOVE_USER_NICKNAME,
    }
}
