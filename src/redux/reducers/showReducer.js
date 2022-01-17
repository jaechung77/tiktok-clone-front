import { ActionTypes } from '../constants/actionTypes'

const initialState = {
    post: [],
    // const [ likes, setLikes] = useState(useSelector((state) => state.allPosts.posts[index].likes))
                                                                // state.allPosts.posts[index].likes
}
export const showReducer = ( state= initialState, { type, payload }) => {
    switch (type){
        case ActionTypes.FETCH_POST:
                return {...state, post:payload}        

        default:
            return state
    }
}