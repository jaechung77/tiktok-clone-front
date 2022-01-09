import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions'


const Followings = () => {
  const videos = useSelector((state) => state)
  const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchPosts())
	}, [])
	console.log("Videos:", videos)

  const renderVideos = videos.allPosts.posts.map((video, i) =>{
    const {id, title, content, file, nick_name } = video
    return(
      <Col sm={4}>
      <div className="app" key={id}>
        <div className="app__mobile">
          {console.log("Each video URL:", `${request.API}${file.url}`)}
            <Video
              src={`${request.API}${file.url}`}
              key={id}
              title={title}
              content={content}
              nickName={nick_name}
              index={i}
            />
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
