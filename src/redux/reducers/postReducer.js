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
        case ActionTypes.INCREMENT_LIKES:
            console.log("Likes is >>>>>>>>>",payload.id)
            console.log("Rducer is >>>>>>>>>",state.posts[1].id)
            const postIndex = state.posts.findIndex(post => post.id === payload.id);
            console.log("postIndex is >>>>>>>>>", postIndex)
            if (postIndex !== -1) {
              return state.posts.map((post, i) => ({
                    posts: {
                    ...post,
                    likes: post.likes + (postIndex === i ? 1 : 0),
                    }
              })
            )
            } else {
              return {
                  posts: [...state.posts]
              }    
            }

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