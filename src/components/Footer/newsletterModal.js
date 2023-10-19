import React from 'react';
import './newsletterModal.css';
import { images } from '../../constants';

const newsletterModal = ({ closeModal }) => (
  <div className="newsletter-modal-container">
    <button type="button" className="newsletter-modal-cancel" onClick={closeModal}>
      <img src={images.picture.cancel} width={24} height={24} alt="Cancel" loading="lazy" />
    </button>
    <img src={images.picture.correct} width={100} height={100} alt="close" className="newsletter-correct" loading="lazy" />
    <h2>Thank you for subscribing</h2>
    <h3>Your email has been saved</h3>
  </div>
);

export default newsletterModal;
