
import './App.css';
import Video from './Video.js';

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video url={"https://player.vimeo.com/external/426673801.sd.mp4?s=5ae53c0adb71bc9f2098e8a8f6a18fa3f27337c9&profile_id=165&oauth2_token_id=57447761"} channel={"channiD86"} description={"MERN Practice"} song={"song title here"} likes={111} messages={222} shares={333}/>
        <Video url={"https://player.vimeo.com/external/426673801.sd.mp4?s=5ae53c0adb71bc9f2098e8a8f6a18fa3f27337c9&profile_id=165&oauth2_token_id=57447761"} channel={"channiD86"} description={"MERN Practice"} song={"song title here"} likes={11} messages={22} shares={33}/>
      </div>
      {/* app container */}
        {/* videos */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}    
    </div>
  );
}

export default App;
