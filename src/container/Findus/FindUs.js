import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Bounded Terminal" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Queena Bonded Terminal Limited</h1>
      <div className="app__wrapper-content">
        <h5 style={{
          color: 'white',
          fontSize: '18px',
          lineHeight: '1.4',
          textAlign: 'center',
          backgroundColor: 'blue',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}
        >
          Welcome to our state-of-the-art Bounded Terminal, where seamless global trade begins. As the heart of your import and export operations, we offer you a comprehensive suite of services and cutting-edge technology to streamline your importation/exportation processes and elevate your trade experience.

          In an increasingly interconnected world, efficient importation/exportation is paramount for businesses aiming to thrive in the global marketplace. Our Bounded Terminal is designed to be your trusted partner in navigating the complexities of international trade.
        </h5>

        <br />
        <div className="terminal-address">
          <p className="p__opensans">47, Dada Onijomo crescent, off Awodi-ora estate, off otto whorf bus-stop, Apapa-Oshodi express way, Lagos.</p>
          <br />
          <p className="p__opensans">Call us// Whatsapp @ <strong>+234-802-300-0819, +234-706-288-4141, +234-8809-939-2895</strong></p>
          <br />
          <p className="p__opensans">Email us @ <strong>queenainvestmentltd@yahoo.com</strong></p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 8:00 am - 06:00 pm</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 pm</p>
        </div>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.picture.rectangle} alt="terminals_img" height={500} width={550} loading="lazy" />
    </div>

  </div>
);

export default FindUs;
