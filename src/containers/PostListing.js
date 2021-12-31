import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../redux/actions/postActions'
import PostComponent from './PostComponent'

const API = "http://localhost:3000/posts"

const PostListing = () => {

    const posts = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchPosts = async () => {
        const response = await axios
        .get(API)
        .catch((err) => {
            console.log("Err", err)
        })
        dispatch(setPosts(response.data))
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    console.log("Posts: ", posts)
    return (
        <div className = "ui grid container">
            <PostComponent />
        </div>
    )
}

export default PostListing
