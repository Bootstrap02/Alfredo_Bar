import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';
import Modal from '../Modals/foodModals';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>Step into a world of culinary delight where every bite is an exquisite journey. We are thrilled to have you join us at Alfredos Restaurant, where exceptional flavors, impeccable service, and a warm ambiance come together to create a truly memorable dining experience. </p>
        <button type="button" className="custom__button" onClick={openModal}>Explore Menu</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.picture.photoG14} alt="header_img" loading="lazy" />
      </div>

      {showModal && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default Header;
