import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    posts: [],
    // const [ likes, setLikes] = useState(useSelector((state) => state.allPosts.posts[index].likes))
                                                                // state.allPosts.posts[index].likes
}
export const postReducer = ( state= initialState, { type, payload }) => {
    switch (type){
        case ActionTypes.FETCH_POSTS:
                return {...state, posts:payload}    
        // case ActionTypes.INCREMENT_LIKES:
        //     return  {
        //             ...state,
        //                 posts: {
        //                     ...state.posts,
        //                     likes: state.allPosts.posts[payload].likes + 1
        //                 }
        //             }
        // case ActionTypes.DECREMENT_LIKES:
        //     return  {
        //             ...state,
        //                 posts: {
        //                     ...state.posts,
        //                     likes: state.allPosts.posts[payload].likes + 1
        //                 }    
        //             }
        default:
            return state
    }
}