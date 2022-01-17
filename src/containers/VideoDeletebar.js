import React from 'react'
import '../css/Video.css'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import requests from '../constants/Requests'


const VideoDeletebar = ({videoID}) => {

  const handleDelete =  async () => {
    window.confirm("Are you sure?")
    const res = deletePost()
    if (res) {
      alert("Successfully deleted!!")
    }
    window.location.reload()
  }

  const deletePost = async () => {
    const res = await axios.delete(requests.fetchMyposts+"/"+videoID)
    return res
  }

  return (
    <>
    <div className="videoTopbar">
        <div className="videoTopbar__button">
          <Button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</Button>
        </div>
    </div>
    </>
  )
}

export default VideoDeletebar
