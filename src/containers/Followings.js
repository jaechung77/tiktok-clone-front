import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux'


const Followings = () => {
  const [videos, setVideos] = useState([])
  const dispatch = useDispatch()

useEffect(() => {
    async function fetchData() {
        const resp = await axios.get(request.fetchVideos)
        console.log("FETCH FROM Follwoings:", resp.data)
        setVideos(resp.data)
        dispatch(resp.data.likes)
        return resp
    }
    fetchData()
}, [])

  const renderVideos = videos.map((video, i) =>{
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
