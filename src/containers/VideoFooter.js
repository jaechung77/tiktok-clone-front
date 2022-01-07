import React, { useState, useEffect} from 'react'
import '../css/Video.css'

const VideoFooter = ({title, nickName}) => {
  return (
    <div className="videoFooter">
       <div className="videoFooter__text">
        <p>{'@@'}{nickName}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default VideoFooter
