import React, {useRef, useState, useEffect} from 'react';
import '../css/Video.css';
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import { useLocation  } from 'react-router-dom'
import VideoDeletebar from './VideoDeletebar'


const Video = ({src, index, key, title, nickName, videoID, shares, posterID, status, likes}) => {
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)
	const userID = sessionStorage.getItem('userID')
	const location = useLocation()
	let deleteMode = false

	const onVideoPress = () => {
		if (playing) { 
			videoRef.current.play()
			setPlaying(false)
		}	else {
			videoRef.current.pause()
			setPlaying(true)
		} 
	}
	// console.log("Video:", videoID)
	// console.log("nickName from video>>>", nickName)
	// console.log("User ID>>>:", userID)
	// console.log("Params", location.pathname)
	if (location.pathname.includes('manage')) {
		deleteMode = true
	}
	// useEffect(()=>{

	// }, [userID])


	return (
		<div className="video">
			<video
				className="video__player" 
				src={src}
				ref={videoRef}
				loop
				onClick={onVideoPress}
				key = {key}
			></video>
			<VideoFooter title={title} nickName= {nickName}/>
			{ deleteMode &&
			<>
				<VideoDeletebar videoID={videoID}/>
			</>
			}
				<>
					{ userID  && userID !== "" && !deleteMode
					?
					<><VideoSidebar  shares={shares} key={key} index={index} videoID={videoID} posterID={posterID} status={status} likes={likes} nickName= {nickName} src={src}/></>
					:
					<></>
					}
				</>
		</div>
	)
}

export default Video
