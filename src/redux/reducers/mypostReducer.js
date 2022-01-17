import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    myposts: [],
}
export const mypostReducer = ( state= initialState, { type, payload }) => {
    switch (type){
        case ActionTypes.FETCH_MYPOSTS:
                return {...state, myposts:payload}

        default:
            return state
    }
}