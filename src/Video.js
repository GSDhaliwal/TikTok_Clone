import React, { useState, useRef } from 'react'
import "./Video.css";

function Video() {
  const [playing, setPlaying] = useState(false)
  
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
      onClick={handleVideoPress}
      className="video_player"
      loop
      ref={videoRef}
      src="https://player.vimeo.com/external/426673801.sd.mp4?s=5ae53c0adb71bc9f2098e8a8f6a18fa3f27337c9&profile_id=165&oauth2_token_id=57447761"></video>

    

      {/* Video Footer */}
      {/* Video*/}
    </div>
  )
}

export default Video
