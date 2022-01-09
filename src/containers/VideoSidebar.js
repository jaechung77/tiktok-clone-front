import React, { useState } from 'react'
import '../css/Video.css'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { incrementLikes, decrementLikes } from '../redux/actions/postActions'
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const VideoSidebar = ({shares, index}) => {
  const likes = useSelector((state) => state.allPosts.posts[index].likes)
  const postObject = useSelector((state) => state.allPosts.posts[index])
  // const [ likes, setLikes] = useState("")
  const [ liked, setLiked ] = useState(false)
  const [ followed, setFollowed ] = useState(false)
  const dispatch = useDispatch()
  
  console.log("key from VidesSidebar>>>", index)
  
  const handleFollow = () => {

  }
  const handleShow = () => {

  }
  return (

    <div className="videoSidebar">
        <div className="videoSidebar__button_info">
          {followed ? (        
              <CheckBoxOutlineBlankOutlinedIcon 
                onClick = { e => {setFollowed(false)}}
              />
            )
            :
            (
              <CheckBoxOutlinedIcon 
                onClick = { e => {setFollowed(true)}}
              />
            )
          }
        </div>

        <div className="videoSidebar__button">
          <ReadMoreIcon
            onClick = { e=> {handleShow()}
            }
          />
        </div>
        <div className="videoSidebar__button">
          {liked ? (
            <FavoriteIcon 
              onClick = { e=> {setLiked(false); 
                dispatch(decrementLikes(postObject))

              }}
            />
          )
          :
          (
            <FavoriteBorderIcon 
              onClick = { e=> {setLiked(true); 
                dispatch(incrementLikes(postObject))
              }}
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
