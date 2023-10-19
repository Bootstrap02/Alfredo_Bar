import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Take a look at our Photo Gallery displaying our <strong>Tantalizing Cuisines</strong>, <strong>Cozy Bar</strong> spacious and richly decorated <strong>Event hall</strong>. </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.picture.photoG1, images.picture.photoG2, images.picture.gallery03, images.picture.photoG3, images.picture.chef, images.picture.findus, images.picture.photoG4, images.picture.photoG5, images.picture.photoG15, images.picture.photoG16, images.picture.photoG17, images.picture.photoG18, images.picture.photoG6, images.picture.photoG7, images.picture.photoG8, images.picture.photoG9, images.picture.photoG10, images.picture.photoG11, images.picture.photoG12, images.picture.photoG13, images.picture.photoG14].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
