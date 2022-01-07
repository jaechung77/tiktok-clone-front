import React, { useState } from 'react'
import '../css/Video.css'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { incrementLikes, decrementLikes } from '../redux/actions/postActions'

const VideoSidebar = ({shares, index}) => {
  const likes = useSelector((state) => state.allPosts.posts[index].likes)
  // const [ likes, setLikes] = useState("")
  const [ liked, setLiked ] = useState(false)
  const dispatch = useDispatch()
  // console.log("likes>>>", likes)
  console.log("key from VidesSidebar>>>", index)
  // console.log("Target from VideoSidebar", `state.allPosts.posts[${index}].likes`)
  return (

    <div className="videoSidebar">
       <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon 
            // onClick = { e=> {setLiked(false); dispatch(incrementLikes(index))}}
          />
         )
         :
         (
          <FavoriteBorderIcon 
            // onClick = { e=> {setLiked(true); dispatch(decrementLikes(index))}}
          />
        )}
        <br/>{liked ? likes+1 :likes}
      </div>
      <div className="videoSidebar__button">
        <ShareIcon />
        <br/>{shares}
      </div> 
    </div>
  )
}

export default VideoSidebar
