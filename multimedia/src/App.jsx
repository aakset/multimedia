import "./App.css";
import AppRouter from "./router";
import { Link } from 'react-router-dom';
import microphone from "./onlinePhotos/Microphone.png";

function App() {
  return (
    <div>
      <div className="container">
        <div className="landing">
          <h1 className="title">Northlake Studios</h1>
          <h2 className="slogan">
            An accessory to your artistic integrity, an environment to redefine
            innovation.
          </h2>
        </div>
        <div className="microphone">
          <img src={microphone} alt="Microphone" style={{ width: "700px" }} />
        </div>

        <nav>
        <ul>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Renting">Renting</Link></li>
          <li><Link to="/Gallery">Gallery & Soundcheck</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </nav>

        <div className="Home">
          <h1>Home</h1>
          <p>
            Welcome to Northlake Studios, a place, where magic is made. At
            Northlake Studios, we offer a unique experience for musicians,
            producers, and artists. Our recording studios are equipped with
            state-of-the-art technology and top-notch equipment, providing the
            perfect environment for bringing your creative vision to life.
            Whether you're a seasoned professional or just starting your musical
            journey, our dedicated team is here to support you every step of the
            way. We pride ourselves on offering flexible rental options,
            customizable studio setups, and a comfortable space where you can
            focus on your craft. Join us at Northlake Studios and experience the
            perfect synergy between cutting-edge technology, exceptional sound
            quality, and unparalleled support. Book your studio session today
            and let your music soar to new heights!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
