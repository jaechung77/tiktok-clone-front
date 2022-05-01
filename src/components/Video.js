import React, {useRef, useState } from 'react';
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

	if (location.pathname.includes('manage')) {
		deleteMode = true
	}

	return (
		<div className="video">
			<video
				className="video__player"
				// https://tt-clone-rails-v4.s3.amazonaws.com/uploads/post/file/16/1.mp4
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
					<><VideoSidebar  shares={shares} key={key} index={index} videoID={videoID}
					posterID={posterID} status={status} likes={likes} nickName= {nickName} src={src}/>
					</>
					:
					<></>
					}
				</>
		</div>
	)
}

export default Video
