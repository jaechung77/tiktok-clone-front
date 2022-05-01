import React, { useEffect} from 'react';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFollows } from '../redux/actions/postActions'


const Followings = () => {
  const videos = useSelector((state) => state)
  const { categoryID } = useParams()
  const dispatch = useDispatch()

	 useEffect(()=>{
    dispatch(fetchFollows(categoryID))
	 }, [categoryID])

  const renderVideos = videos.allFollows.follows.map((video, i) =>{
    const {id, title, content, file, nick_name, viewer, user_id, status, likes } = video
    return(
      <Col sm={4}>
      <div className="app" key={id}>
        <div className="app__mobile">
          { video.file &&
            <Video
              src={file.url}
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
