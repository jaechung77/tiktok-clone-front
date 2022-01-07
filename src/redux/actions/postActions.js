import { ActionTypes } from "../constants/actionTypes"
import request from '../../constants/Requests'
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
        const res = await axios.get(request.fetchVideos)
        dispatch({type:ActionTypes.FETCH_POSTS, payload: res.data})
}

// export const incrementLikes = (index) => {
//     return{
//         type: ActionTypes.INCREMENT_LIKES,
//         payload: index,
//     }
// }

// export const decrementLikes = (index) => {
//     return{
//         type: ActionTypes.DECREMENT_LIKES,
//         payload: index,
//     }
// }