import React from 'react';
import './foodModals.css';
import { images } from '../../constants';

const Modals = ({ closeModal }) => (
  <div className="food-modals-container">
    <button type="button" className="food-modal-cancel" onClick={closeModal}>
      <img src={images.picture.cancel} width={24} height={24} alt="Cancel" loading="lazy" />
    </button>
    <div className="foodcontainer">
      <p>Rice and Chicken</p>
      <p>NGN 5000</p>
      <img src={images.picture.welcome} width={100} height={100} alt="rice and chicken" loading="lazy" />
    </div>
    <div className="foodcontainer">
      <p>Spaghetti and Chicken</p>
      <p>NGN 5000</p>
      <img src={images.picture.photo10} width={100} height={100} alt="spaghetti and chicken" loading="lazy" />
    </div>
    <div className="foodcontainer">
      <p>Vegetable Soup</p>
      <p>NGN 8000</p>
      <img src={images.picture.photo9} width={100} height={100} alt="vegetable soup" loading="lazy" />
    </div>
    <div className="foodcontainer">
      <p>Fruit Salad</p>
      <p>NGN 6000</p>
      <img src={images.picture.photo6} width={100} height={100} alt="fruit salad" loading="lazy" />
    </div>
  </div>
);

export default Modals;
