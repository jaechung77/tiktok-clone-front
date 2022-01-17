import React, { useRef, useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios'
import Hashtag from './Hashtag';
import Comment from './Comment';
import '../css/Video.css'
import '../App.css'
import Follow from './Follow'
import request from '../constants/Requests'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { fetchPost } from '../redux/actions/postActions'
import { useDispatch, useSelector } from 'react-redux';

const Show = () => {
	const videos = useSelector((state) => state)
	const { postID } = useParams()
	// const [ video, setVideo ] = useState("")
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)
	const dispatch = useDispatch()


	const onVideoPress = () => {
		if (playing) { 
			videoRef.current.play()
			setPlaying(false)
		}	else {
			videoRef.current.pause()
			setPlaying(true)
		} 
	}
	const video = videos.allPost.post
	useEffect(()=>{
		console.log("Here1")
		dispatch(fetchPost(postID))
		console.log("Here2")
		console.log("postID from show >>>>>", postID)

	}, [postID])
	// setVideo(videos.allPosts.posts)


	return (
		<div className="app" >
			<Container >
				<Row  xs={2} md={4} lg={6}>
					<Col xs={{ span: 6, offset:2}} className="app__mobile_form">
						<div className="video">
								{ video.file && 
									<video 
										className="video__player" 
										src={`${request.API}${video.file.url}`} 
										ref={videoRef}
										loop
										onClick={onVideoPress}
										style={{}}
									></video>
									
								}
						</div>
					</Col>
					<Col xs={{ span: 6 }} className="app__mobile_form">
							<Container>
								<Row>
									<Col>
										<div >
											<Hashtag />
											<Comment postID={postID}/> 
										</div>
									</Col>
								</Row>
							</Container>					
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Show
