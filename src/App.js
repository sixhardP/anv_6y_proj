import { Parallax } from '@react-spring/parallax'
import Night from './Night';
import './App.css';
import { useEffect } from 'react';
import { FirstContent } from './firstContent';
import { Content } from './content';
import { Day } from './Day';
import { Noon } from './Noon';

function App() {

  useEffect(() => {
    // Play a YouTube video automatically when the page loads
    const videoId = 'HrST1G01xXI'; // Replace with the YouTube video ID
    const iframe = document.getElementById('youtube-player');
    
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Autoplay video and mute by default
    }
  }, []); 


  return (
    <div className="App">
      <Parallax pages={4.35} style={{ top: '0', left: '0' }} className="animation">
        <FirstContent/>
        <Content/>
        <Day/>
        <Noon/>   
        <Night/>
      </Parallax>


      <div className="youtube-player-container" style={{display:'none'}}>
        <iframe
          id="youtube-player"
          title='song'
          width="560"
          height="315"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default App;
