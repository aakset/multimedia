import React, { useState } from "react";
import "./Gallery.css";
import pic1 from "./photos/ROOMSHOOT-03-01.jpg";
import pic2 from "./photos/ROOMSHOOT-03-02.jpg";
import pic3 from "./photos/ROOMSHOOT-03-03.jpg";
import pic4 from "./photos/ROOMSHOOT-03-04.jpg";
import pic5 from "./photos/ROOMSHOOT-03-05.jpg";
import pic6 from "./photos/ROOMSHOOT-03-06.jpg";
import pic7 from "./photos/ROOMSHOOT-03-07.jpg";
import pic8 from "./photos/ROOMSHOOT-03-08.jpg";
import pic9 from "./photos/ROOMSHOOT-03-09.jpg";
import pic10 from "./photos/ROOMSHOOT-03-10.jpg";
import pic11 from "./photos/ROOMSHOOT-03-11.jpg";
import pic12 from "./photos/ROOMSHOOT-03-12.jpg";
import pic13 from "./photos/ROOMSHOOT-03-13.jpg";
import pic14 from "./photos/ROOMSHOOT-03-14.jpg";
import pic15 from "./photos/ROOMSHOOT-03-15.jpg";
import pic16 from "./photos/ROOMSHOOT-03-16.jpg";
import pic17 from "./photos/ROOMSHOOT-03-17.jpg";
import pic18 from "./photos/ROOMSHOOT-03-18.jpg";
import pic19 from "./photos/ROOMSHOOT-03-19.jpg";
import pic20 from "./photos/ROOMSHOOT-03-20.jpg";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="photos">
        <img src={pic1} alt="pic1" onClick={() => handleClick(pic1)} />
        <img src={pic2} alt="pic2" onClick={() => handleClick(pic2)} />
        <img src={pic3} alt="pic3" onClick={() => handleClick(pic3)} />
        <img src={pic4} alt="pic4" onClick={() => handleClick(pic4)} />
        <img src={pic5} alt="pic5" onClick={() => handleClick(pic5)} />
        <img src={pic6} alt="pic6" onClick={() => handleClick(pic6)} />
        <img src={pic7} alt="pic7" onClick={() => handleClick(pic7)} />
        <img src={pic8} alt="pic8" onClick={() => handleClick(pic8)} />
        <img src={pic9} alt="pic9" onClick={() => handleClick(pic9)} />
        <img src={pic10} alt="pic10" onClick={() => handleClick(pic10)} />
        <img src={pic11} alt="pic11" onClick={() => handleClick(pic11)} />
        <img src={pic12} alt="pic12" onClick={() => handleClick(pic12)} />
        <img src={pic13} alt="pic13" onClick={() => handleClick(pic13)} />
        <img src={pic14} alt="pic14" onClick={() => handleClick(pic14)} />
        <img src={pic15} alt="pic15" onClick={() => handleClick(pic15)} />
        <img src={pic16} alt="pic16" onClick={() => handleClick(pic16)} />
        <img src={pic17} alt="pic17" onClick={() => handleClick(pic17)} />
        <img src={pic18} alt="pic18" onClick={() => handleClick(pic18)} />
        <img src={pic19} alt="pic19" onClick={() => handleClick(pic19)} />
        <img src={pic20} alt="pic20" onClick={() => handleClick(pic20)} />
      </div>
      {selectedImage && (
        <div className="gallery-container active" onClick={handleClose}>
          <img src={selectedImage} alt="selected" />
        </div>
      )}
      {selectedImage && <div className="blurred-background" />}
    </div>
  );
}

export default Gallery;
