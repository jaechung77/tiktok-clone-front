import React, {useState, useEffect, useCallback} from 'react';
import '../App.css'
import axios from 'axios';
import request from '../constants/Requests'
import Video from './Video'
import { setPosts } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions'
import { useCookies } from 'react-cookie'


const Home = () => {
	const videos = useSelector((state) => state)
	const [ rerender, setRerender] = useState(true)
	const dispatch = useDispatch()
	const [cookies, setCookie] = useCookies(['accessToken'])

	useEffect(()=>{
		dispatch(fetchPosts())
		// setRerender(false)
	}, [])
console.log("Cookie:>>>>>>>>", cookies.accessToken)

	const renderVideos = videos.allPosts.posts.map((video, i) =>{
		const {id, title, content, file, nick_name, viewer, user_id, status, likes } = video
		return(
			<div className="app" >
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
		)
	})
	return <>{renderVideos}</>

}

export default Home
