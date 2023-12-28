import React from 'react'
import Fvideo from '../assets/Fvideo.mp4'
import fires from '../assets/fires.mp4'
import tree from '../assets/tree.mp4'
import './home.css';

const Home = () => {
  return (
    <div id='whole'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <div id="greenflower"><h2 id="gfh">Blissful Occasions</h2></div>
    <div id='future'>
      <p>Welcome to the epitome of seamless event experiences, <br/> where every moment is a masterpiece and every detail is a brushstroke of perfection.</p>
      <video src={Fvideo} autoPlay loop muted/>
      </div>
      <div id='firecrackers'>
      <p>Embrace the richness of tradition and the vibrancy of celebrations with <h3>Blissful Occasions</h3> We specialize in curating unforgettable Indian events that blend cultural heritage with contemporary elegance.</p>
      <video src={fires} autoPlay loop muted/>
      </div>
      <div id='textscroll'>
      
      </div>
      <div id='footdiv'>
      <footer id='foothome'>
        <video src={tree} autoPlay muted loop />
        <div id='aboutfoot'><h2>About us</h2><hr/><nav><ul><li><p>Our Team</p></li><li><p>Contact us</p></li></ul></nav></div>
        <div id='contactfoot'><h2>Contact us</h2><hr/><address><br/>Raipur, Chhattisgarh, India</address></div>
    </footer>
    </div>
    </div>
  )
}

export default Home
