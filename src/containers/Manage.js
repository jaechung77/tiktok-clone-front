import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyposts } from '../redux/actions/postActions'


const Manage = () => {
  const videos = useSelector((state) => state)
  const dispatch = useDispatch()
  const userID = sessionStorage.getItem('userID')


	 useEffect(()=>{
    dispatch(fetchMyposts(userID))
    console.log("My Posts RENDERING >>>>>>>>>>>>>>>")
	 }, [userID])
	console.log("Videos:", videos)
  console.log("DARA>>>>>>>>>>>FOOOO>>>:", videos.myPosts.myposts)
  const renderVideos = videos.myPosts.myposts.map((video, i) =>{
    const {id, title, content, file, nick_name, viewer, user_id, status, likes } = video
    return(
      <Col sm={4}>
      <div className="app" key={id}>
        <div className="app__mobile">
          {console.log("Each video URL:", `${request.API}${file.url}`)}
          { video.file && 
            <Video
              src={`${request.API}${file.url}`}
              videoID={id}
              title={title}
              content={content}
              nickName={nick_name}
              index={i}
              shares={viewer}
              posterID = {user_id}
              status= {status}
              likes = {likes}
            />
          }
          </div>
      </div>
      </Col>
    )
  })

  return (
    <Container>
      <Row>
        {renderVideos}
      </Row>
    </Container>
  )
}

export default Manage
