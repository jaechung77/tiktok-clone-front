import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    searchposts: [],
}
export const searchpostReducer = ( state= initialState, { type, payload }) => {
    switch (type){

        case ActionTypes.FETCH_SEARCHPOSTS:
                return {...state, searchposts:payload}        
        default:
            return state
    }
}