import React, { useState, useEffect } from 'react'
import '../css/Video.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { useParams } from 'react-router-dom'
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import requests from '../constants/Requests'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const VideoSidebar = ({shares, index, videoID, posterID, status, likes, nickName, src}) => {
  const postObject = useSelector((state) => state.allPosts.posts[index])
  const [ shareSuccess, setShareSuccess] = useState(false)
  const [ liked, setLiked ] = useState(false)
  const [ followed, setFollowed ] = useState(false)
  const [ postSucess, setPostSucess ] = useState(false)
  const [ noOfLikes, setNoOfLikes ] = useState(likes)
  const [ noOfShares, setNoOfShares ] = useState(shares)
  const [ followID, setFollowID ] = useState("")
  const [ rerender, setRerender] = useState(0)
  const [ copied, setCopied ] = useState(false)
  const clipboard = src
  let actionString = ""

  if (status === 2 ){
    actionString = "CANCEL FOLLOW" // 2=> Delete Row
  }
  else if (status === 3){
    actionString = "ACCEPT"   // 3=> 4
  }
  else if (status === 4){
    actionString = "UNFOLLOW"    // 4 => Delete Row
  }
  else{
    actionString = "FOLLOW"  // => 2
  }

  const likesData = {
		likes,
	}

  const sharesData = {
		viewer: shares
	}

  const handleLikes = async () => {
    setFollowed(true)
    await axios.patch(requests.addLikes+"/"+videoID+"/likes", likesData)
		.then(res => {
      setPostSucess(true)
      fetchLikes()
    })
		.catch(err => {
			console.log("err>>>>", err)
		})
  }

  const fetchLikes =  async () => {
    await axios.get(requests.showLikes+"/"+videoID+"/show_likes")
    .then(res => {
      setPostSucess(true)
      setNoOfLikes(res.data)
    })
    .catch(err => {
      console.log("err>>>>", err)
    })
  }

  const addFollow =  async () => {
    await axios.post(requests.addFollows, followsData)
    .then(res => {
      window.location.reload()
    })
    .catch(err => {
      console.log("err>>>>", err)
    })
  }

  const deleteFollow =  async () => {
    await axios.post(requests.findFollows, searchData)
    .then(res => {
      setFollowID(res.data.id)
      axios.delete(requests.addFollows+"/"+res.data.id)
      setRerender(rerender+1)
    })
    .then( res => {
      window.location.reload()
    })
    .catch(err => {
      console.log("err>>>>", err)
    })
  }

  const acceptFollow =  async () => {
    await axios.post(requests.findFollows, acceptSearchData)
    .then(res => {
      setFollowID(res.data.id)
      axios.patch(requests.addFollows+"/"+res.data.id, friendData)
      setRerender(rerender+1)
    })
    .then( res => {
      window.location.reload()
    })
    .catch(err => {
      console.log("err>>>>", err)
    })
  }

  const handleShares = async () => {
    await axios.patch(requests.addLikes+"/"+videoID+"/shares", sharesData)
		.then(res => {
      setShareSuccess(true)
      fetchShares()
      alert("Copied to clipboard")
    })
		.catch(err => {
			console.log("err>>>>", err)
		})
  }

  const fetchShares =  async () => {
    await axios.get(requests.showLikes+"/"+videoID+"/show_shares")
    .then(res => {
      setNoOfShares(res.data)
    })
    .catch(err => {
      console.log("err>>>>", err)
    })
  }

  // when the current status is 1
  const followsData = {
    followee_id: Number(sessionStorage.getItem('userID')),
    follower_id: posterID,
    followee_nick_name: sessionStorage.getItem('nickName'),
    follower_nick_name: nickName,
    status: 2,
  }
 // when the current status is 3
  const friendData = {
    status: 4,
  }

  const searchData = {
    followee_id: Number(sessionStorage.getItem('userID')),
    follower_id: posterID,
  }

  const acceptSearchData = {
    follower_id: Number(sessionStorage.getItem('userID')),
    followee_id: posterID,
  }

  const handleFollows =  () => {
    if (status === 1){
      addFollow()
    }
    else if (status === 2){
      deleteFollow()
    }
    else if (status === 3){
      //Patch
      acceptFollow()
    }
    else{
      //Delete
        deleteFollow()
    }
  }


  useEffect(()=>{

  }, [rerender])


  return (
    <>
    <Row className="videoTopbar">
        <Col className="videoTopbar__button">
          <Button type="button" className="btn btn-danger" onClick={handleFollows}>{actionString}</Button>
        </Col>
        <Col className="videoTopbar__button">
        <Link to = {`/show/${videoID}`}>
          <Button type="button" className="btn btn-info" style={{marginTop: "45vh"}}>More</Button>
        </Link>
        </Col>
    </Row>

    <div className="videoSidebar">
        <div className="videoSidebar__button">
          {liked ? (
            <FavoriteIcon
              onClick = { e=> {setLiked(false)}}
            />
          )
          :
          (
            <FavoriteBorderIcon 
              onClick = {handleLikes} 
            />
          )}
          <br/>{noOfLikes}
      </div>
      <CopyToClipboard text={clipboard}
        onCopy={e => {setCopied(true)}}>
        <div className="videoSidebar__button">
          <ShareIcon onClick = {handleShares}/>
          <br/>{noOfShares}
        </div> 
      </CopyToClipboard>
    </div>
    </>
  )
}

export default VideoSidebar
