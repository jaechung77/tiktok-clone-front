import React, { useEffect } from 'react';
import '../App.css'
import '../css/Video.css'
import request from '../constants/Requests'
import Video from './Video'
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchposts } from '../redux/actions/postActions'


const SearchResult = () => {
  const searchStr = useSelector((state) => state.searchString.searchstring)
  const userID = sessionStorage.getItem('userID')
  const videos = useSelector((state) => state)
  const dispatch = useDispatch()

	 useEffect(()=>{
    dispatch(fetchSearchposts(searchStr))
	 }, [searchStr])

  const renderVideos = videos.searchPosts.searchposts.map((video, i) =>{
    const {id, title, content, file, nick_name, viewer, user_id, status, likes } = video
    return(
      <Col sm={4}>
      <div className="app" key={id}>
        <div className="app__mobile">
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
              key = {id}
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

export default SearchResult
