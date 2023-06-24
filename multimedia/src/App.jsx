import "./App.css";
import React from "react";
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
      </div>
    </div>
  );
}

export default App;
