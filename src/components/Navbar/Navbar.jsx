import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.picture.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Eatery</a></li>
        <li className="p__opensans"><a href="#about">Night Club</a></li>
        <li className="p__opensans"><a href="#menu">Lounge and Bar</a></li>
        <li className="p__opensans"><a href="#awards">Event Hall</a></li>
        <li className="p__opensans"><a href="#contact">Import & Export Terminal</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Contact || Book Now</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Eatery</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>Night Club</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Lounge and Bar</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Import and Export Terminal</a></li>
              <li><a href="#login" onClick={() => setToggleMenu(false)}>Contact || Book Now</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
