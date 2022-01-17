import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    follows: [],
}
export const followReducer = ( state= initialState, { type, payload }) => {
    switch (type){

        case ActionTypes.FETCH_FOLLOWS:
                return {...state, follows:payload} 

        default:
            return state
    }
}

// Jae : reference for future use 
// case ActionTypes.INCREMENT_LIKES:
//     const incList = state.posts.map((post) => {
//         if (post.id === payload.id)
//         {
//             console.log("post id", post.id)
//              return {...post, likes: post.likes + 1}
//         }
//         return {...post}
//     })
//     const fmtList = { posts: incList}
//     return fmtList


// case ActionTypes.DECREMENT_LIKES:
//     return  {
//             ...state,
//                     //likes: state.likes - 1
//                     // posts:payload
                  
//             }