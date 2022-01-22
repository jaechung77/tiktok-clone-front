import { ActionTypes } from "../constants/actionTypes"
import request from '../../constants/Requests'
import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
    console.log("In the action")
    const res = await axios.get(request.fetchVideos)
    dispatch({type:ActionTypes.FETCH_POSTS, payload: res.data})
}

export const fetchMyposts = (index) => async (dispatch) => {
    console.log("In the action")
    const res = await axios.get(request.fetchMyposts+"/"+index+"/mypost")
    dispatch({type:ActionTypes.FETCH_MYPOSTS, payload: res.data})
}

export const fetchSearchposts = (searchStr) => async (dispatch) => {
    const jsonData = {"nick_name": `${searchStr}`}
    const res = await axios.post(request.fetchMyposts+"/1/find", jsonData)
    dispatch({type:ActionTypes.FETCH_SEARCHPOSTS, payload: res.data})
}

export const searchString = (str) => async (dispatch) => {
    const res = await str
    dispatch ({
        type: ActionTypes.SEARCH_STRING,
        payload: res,
    })
}

export const fetchPost = (index) => async (dispatch) => {
    const res = await axios.get(request.fetchVideo+"/"+index)
    dispatch({type:ActionTypes.FETCH_POST, payload: res.data})
}

export const fetchFollows = (categoryID) => async (dispatch) => {
    let actionName = ""
    if (categoryID === "2"){
        actionName = "show_requested"
    }
    else if (categoryID === "3"){
        actionName = "show_to_accept"
    }
    else if (categoryID === "4"){
        actionName = "show_friends"
    }
    else if (categoryID === "1"){
        actionName = "show_to_follow"
    }
    else if (categoryID === "5"){
        actionName = "show_relationship"
    }
    else {
        actionName = "show_all"
    }

    const res = await axios.get(request.fetchFollows + "/" + sessionStorage.getItem("userID")+ "/" + actionName)
    dispatch({type:ActionTypes.FETCH_FOLLOWS, payload: res.data})
}

export const addLikes = (index) => {

}

export const incrementLikes = (index) => {
    return{
        type: ActionTypes.INCREMENT_LIKES,
        payload: index,
    }
}

export const decrementLikes = (index) => {
    return{
        type: ActionTypes.DECREMENT_LIKES,
        payload: index,
    }
}