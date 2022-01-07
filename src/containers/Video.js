import React, {useRef, useState} from 'react';
import '../css/Video.css';
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'


const Video = ({src, index, key, title, nickName}) => {
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)
	const onVideoPress = () => {
		if (playing) { 
			videoRef.current.play()
			setPlaying(false)
		}	else {
			videoRef.current.pause()
			setPlaying(true)
		} 
	}
	console.log("Key from Video:", index)
	console.log("nickName from video>>>", nickName)
	return (
		<div className="video">
			<video
				className="video__player" 
				src={src}
				ref={videoRef}
				loop
				onClick={onVideoPress}
			></video>
			<VideoFooter title={title} nickName= {nickName}/>
			<VideoSidebar  shares={333} key={key} index={index}/>
		</div>
	)
}

export default Video
