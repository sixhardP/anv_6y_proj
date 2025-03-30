import { ParallaxLayer } from "@react-spring/parallax"
import dayForest from './images/day.gif'
import firstDay from './images/first_day.jpg'


export const Day = () => {
    return (
    <ParallaxLayer offset={2} speed={0.45}>
        <div  style={{
            backgroundImage: "url(" + dayForest + ")",
        backgroundSize: "cover",
        height: "100vh",
        padding:24
        }}>
         <h1 id="textblock-title" style={{color:'white',fontFamily:'cursive'}}>Day</h1>
         <h1 id="textblock-title" style={{color:'white',fontFamily:'cursive'}}>The Beginning</h1>
         <div style={{width:'100%', height:'100%', display:'flex',flexDirection:'column',alignItems:'center',paddingTop:16}}>
         <img src={firstDay} width={230} height={250} alt="first-date" />
         <p style={{color:'white'}}>This is the first pic I took of you. I was very nervous and nervous at that time because I didn't have the confidence to look at you. I thought I wasn't worth staying by your side</p>
         </div>
        </div>
    </ParallaxLayer>
    )
}