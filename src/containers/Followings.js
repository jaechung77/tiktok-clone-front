import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollows } from '../redux/actions/postActions'


const Followings = () => {
  const videos = useSelector((state) => state)
  const { categoryID } = useParams()
  const dispatch = useDispatch()



	 useEffect(()=>{
    dispatch(fetchFollows(categoryID))
    console.log("FOLLOWING RENDERING >>>>>>>>>>>>>>>")
	 }, [categoryID])
	console.log("Videos:", videos)
  console.log("DARA>>>>>>>>>>>FOOOO>>>:", videos.allFollows.follows)
  const renderVideos = videos.allFollows.follows.map((video, i) =>{
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

export default Followings
