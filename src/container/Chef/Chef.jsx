import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.picture.chef} alt="chef_image" loading="lazy" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Founder's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.picture.quote} alt="quote_image" loading="lazy" />
        </div>
        <p className="p__opensans">Welcome to a realm of culinary delights, vibrant rhythms, and an ambiance that transcends the ordinary. We proudly present to you an unprecedented fusion of indulgence; a seamless blend of a sophisticated bar, an electrifying night club, and a tantalizing eatery all under one roof. Step into an immersive experience where melodies intertwine with laughter and where every moment is an invitation to celebrate life.</p>
      </div>

      <div className="app__chef-sign">
        <p>Alfred Obelle</p>
        <p className="p__opensans">Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
