import { ParallaxLayer } from "@react-spring/parallax"
import cloud  from '../src/images/cloud.gif'
import sun from '../src/images/sun.webp'
import moon from '../src/images/moon.gif'




export const Content = () => {
    return (
        <>
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="animation_layer parallax" id="contentImg"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} >
          <div className='textblock-title' style={{ fontFamily:'cursive',color:'white',fontSize:40,padding:30}}>All Content</div>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0.5} >
        <div className='textblock-title' style={{ fontFamily:'cursive',color:'white',fontSize:30, padding:'90px 0 0 45px'}}>
            <p style={{display:'flex', alignItems:'flex-start',gap:8}}>Day <span><img src={cloud} alt="cloud" width={45} height={45}/></span></p>
            <p style={{display:'flex', alignItems:'flex-start',gap:8}}>Noon <span><img src={sun} alt="sun" width={45} height={45}/></span></p>
            <p style={{display:'flex', alignItems:'flex-start',gap:8}}>Night <span style={{paddingTop:'5px'}}><img style={{borderRadius:100}} src={moon} alt="moon" width={30} height={30} /></span></p>
        </div>
        </ParallaxLayer>
        </>
    )
}