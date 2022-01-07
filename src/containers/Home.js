import React, {useState, useEffect, useCallback} from 'react';
import '../App.css'
import axios from 'axios';
import request from '../constants/Requests'
import Video from './Video'
import { setPosts } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/postActions'



const Home = () => {
	const videos = useSelector((state) => state)
	const dispatch = useDispatch()

	useEffect(()=>{
		dispatch(fetchPosts())
	}, [])
console.log("Videos:", videos)

	const renderVideos = videos.allPosts.posts.map((video, i) =>{
		const {id, title, content, file, nick_name } = video
		return(
			<div className="app" >
			<div className="app__mobile">
				{console.log("Key From Home:", i)}
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
		)
	})
	return <>{renderVideos}</>

}

export default Home
