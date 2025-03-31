import { ParallaxLayer } from "@react-spring/parallax"
import ReactPlayer from "react-player"
import video from './video/latest-video.mp4'



export const Noon = () => {
    return (
        <>
          <ParallaxLayer offset={2.78} speed={0.25}>
        <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.78} speed={0.25}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.78} speed={0.25}>
            <div style={{padding:24}}>
            <h1 id="textblock-title" style={{color:'white',fontFamily:'cursive'}}>Noon</h1>
            <h1 id="textblock-title" style={{color:'white',fontFamily:'cursive'}}>The Present</h1>
            </div>

            <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <ReactPlayer
            url={video}
            width={'300px'}
            height={'450px'}
            controls={true}
            />
            </div>
            
            <p style={{color:'white',padding:24}}>
            This is the latest video I shot when we met. At that time, we were watching Tee-Yod 2, and we were both very happy. I hope to continue being this happy.
            </p>
        </ParallaxLayer>
        </>
    )
}