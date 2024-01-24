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

  const studios = {
    "Northlake A": [pic1, pic2, pic3, pic4, pic5],
    "Northlake B": [pic6, pic7, pic8, pic9, pic10],
    "Northlake C": [pic11, pic12, pic13, pic14, pic15],
    "Northlake D": [pic16, pic17, pic18, pic19, pic20]
  };

  return (
    <div>
      {Object.entries(studios).map(([studioName, images]) => (
        <div key={studioName}>
          <h2>{studioName}</h2>
          <div className="photos">
            {images.map((image, index) => (
              <figure key={index} onClick={() => handleClick(image)}>
                <img src={image} alt={`${studioName}-${index + 1}`} />
                <figcaption>{`${studioName} - Image ${index + 1}`}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      ))}
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