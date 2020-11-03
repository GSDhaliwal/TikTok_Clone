import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@channid86</h3>
        <p>Random description</p> 
        <div className="videoFooter_ticker">
          <MusicNoteIcon className="videoFooter_icon" />
        </div> 
      </div>
    </div>
  )
}

export default VideoFooter
