import React from "react";
import microphone from "./onlinePhotos/Microphone.png";
import "./home.css";

function Home() {
  return (
    <div>
    <div className="container">
      <div className="landing">
        <h1 className="title">Northlake Studios</h1>
        <h2 className="slogan">
          An accessory to your artistic integrity, an environment to redefine innovation.
        </h2>
      </div>
      <div className="microphone">
        <img src={microphone} alt="Microphone" style={{ width: "700px" }} />
      </div>
    </div>

      <div className="youtube-video">
      <iframe
        width="840"
        height="472.5"
        src="https://www.youtube.com/embed/l7n6nnUGM0Q"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
}

export default Home;