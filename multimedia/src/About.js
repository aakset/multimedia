import React from "react";
import "./About.css";
import pic1 from "./onlinePhotos/desertnight.jpg";
import pic2 from "./onlinePhotos/nightsky.jpg";
import pic3 from "./onlinePhotos/skyline.jpg";

function About() {
  return (
    <div className="container-about">
      <div className="content">
        <h1 className="titleAbout">About</h1>
        <p className="mainText">
          Welcome to Northlake Studios, a place where magic is made. At Northlake Studios, we offer a unique experience for musicians, producers, and artists. Our recording studios are equipped with state-of-the-art technology and top-notch equipment, providing the perfect environment for bringing your creative vision to life. Whether you're a seasoned professional or just starting your musical journey, our dedicated team is here to support you every step of the way. We pride ourselves on offering flexible rental options, customizable studio setups, and a comfortable space where you can focus on your craft. Join us at Northlake Studios and experience the perfect synergy between cutting-edge technology, exceptional sound quality, and unparalleled support. Book your studio session today and let your music soar to new heights!
        </p>
      </div>

      <div className="audio-container">
        <div className="audio-player">
          <div className="audio-content">
            <audio controls>
              <source src={require("./Song1.mp3")} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img src={pic1} alt="Image 1" className="audio-image" />
          </div>
        </div>

        <div className="audio-player">
          <div className="audio-content">
            <audio controls>
              <source src={require("./Song2.mp3")} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img src={pic2} alt="Image 2" className="audio-image" />
          </div>
        </div>

        <div className="audio-player">
          <div className="audio-content">
            <audio controls>
              <source src={require("./Song3.mp3")} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img src={pic3} alt="Image 3" className="audio-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
