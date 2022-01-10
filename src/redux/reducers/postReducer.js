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

        case ActionTypes.FETCH_FOLLOWS:
                return {...state, posts:payload}        

        case ActionTypes.INCREMENT_LIKES:
            const incList = state.posts.map((post) => {
                if (post.id === payload.id)
                {
                    console.log("post id", post.id)
                     return {...post, likes: post.likes + 1}
                }
                return {...post}
            })
            const fmtList = { posts: incList}
            return fmtList
            


        case ActionTypes.DECREMENT_LIKES:
            return  {
                    ...state,
                            //likes: state.likes - 1
                            // posts:payload
                          
                    }
        default:
            return state
    }
}