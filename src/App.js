import { Parallax } from '@react-spring/parallax';
import Night from './Night';
import './App.css';
import { useEffect, useState } from 'react';
import { FirstContent } from './firstContent';
import { Content } from './content';
import { Day } from './Day';
import { Noon } from './Noon';
import ReactAudioPlayer from "react-audio-player";
import backgroundMusic from '././mp3/background-music.mp3';

function App() {

  const [isMuted, setIsMuted] = useState(true); // Start with muted to allow autoplay
  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    // After the component is mounted, unmute audio after a small delay (or after interaction)
    const timer = setTimeout(() => {
      setIsMuted(false); // Unmute audio after loading
    }, 2000); // Wait 2 seconds or adjust timing based on preference

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);

  return (
    <div className="App">
      <Parallax pages={4.35} style={{ top: '0', left: '0' }} className="animation">
        <FirstContent />
        <Content />
        <Day />
        <Noon />
        <Night />
      </Parallax>

      {/* Player */}
      <div className="youtube-player-container">
        {/* Play audio immediately with muted */}
        <ReactAudioPlayer
          src={backgroundMusic}
          loop
          muted={isMuted} // Initially muted to bypass autoplay restrictions
          controls
          onPlay={() => setIsPlay(true)}
          style={{ position: 'absolute', zIndex: 100,visibility: isPlay ? 'hidden' : 'initial' }}
        />
      </div>
    </div>
  );
}

export default App;
