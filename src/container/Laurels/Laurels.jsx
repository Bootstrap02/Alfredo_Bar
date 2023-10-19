import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Laurels.css';

const Laurels = () => (
  <div className="laurels-container app__bg app__wrapper section__padding">
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="The center piece" />
        <h1 className="headtext__cormorant">Our Event Hall</h1>

        <div className="app__laurels_awards">
          <h1 className="app__footer-headtext">For Booking, Contact Us @ </h1>
          <p className="p__opensans">+234-803-302-0723</p>
          <p className="p__opensans">+234-703-473-8937</p>
        </div>
      </div>
      <video className="app__laurels_video" controls width="600" height="500" loading="lazy" autoPlay>
        <source src={images.picture.hall} type="video/mp4" />
        <track kind="captions" srcLang="en" label="English captions" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className="laurels-images">
      <img src={images.picture.hall1} alt="laurels_img" width={500} height={500} loading="lazy" />
      <img src={images.picture.hall2} alt="laurels_img" width={500} height={500} loading="lazy" />
    </div>
  </div>
);

export default Laurels;
