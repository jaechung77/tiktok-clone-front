import React, {useState, useEffect, useCallback} from 'react';
import '../App.css'
import request from '../constants/Requests'
import Video from './Video'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions'

const Home = () => {
	const videos = useSelector((state) => state)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchPosts())
	}, [])


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
