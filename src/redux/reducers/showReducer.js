import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    post: [],
}
export const showReducer = ( state= initialState, { type, payload }) => {
    switch (type){
        case ActionTypes.FETCH_POST:
                return {...state, post:payload}

        default:
            return state
    }
}