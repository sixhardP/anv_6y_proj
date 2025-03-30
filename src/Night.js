import { useState } from 'react';
import './App.css';
import you from '../src/images/you-1.png'
import shootingStar from '../src/images/starfall-gif-46.gif'
import { ParallaxLayer } from '@react-spring/parallax';
import Wordle from './Wordle';
import MultiStageTransition from './MultiStageTransition';

function Night() {
    return (
         <ParallaxLayer offset={3.5} speed={0.45}>
        <div  style={{
            backgroundImage: "url(" + shootingStar + ")",
        backgroundSize: "cover",
        height: "100vh",
        }}>
         <div  style={{padding:24}}>
                {/* <h1 id="textblock-title">Night</h1>
                <h1 id="textblock-title">ขอให้เป็นปีที่ดีสำหรับเราทั้งคู่</h1> */}
                <MultiStageTransition/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                {/* <p id="textblock-content">อยู่ด้วยกันไปนานๆ</p> */}
                <img src={you} width={150} height={250} alt='you-1'  />
                <div style={{position:'absolute',left:'10px'}}>
                <Wordle letters={['A','N','V','','6','Y']} />
                </div>
            
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <p id='textblock-title'>1 April 2025</p>
                </div>
                </div>
            <footer id='textblock-footer'>
                Credit Image🧡 By&nbsp;
                <a id="textblock-devsense" href="https://youtube.com/c/DevSense19">DevSense</a>
            </footer>
        </div>
        </ParallaxLayer>
    );
}

export default Night;
