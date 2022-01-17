import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    searchstring: "",
}
export const searchstringReducer = ( state= initialState, { type, payload }) => {
    switch (type){

        case ActionTypes.SEARCH_STRING:
                return {searchstring:payload}
        default:
            return state
    }
}