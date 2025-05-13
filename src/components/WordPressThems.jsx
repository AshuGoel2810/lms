import React from 'react';
import mark from '../assets/mask_groupTwo.png'

const WordPressThems = () => {
  return (
    <div className="container my-5">
      <div
        className="position-relative rounded overflow-hidden"
        style={{
            backgroundImage: `url(${mark})`,          
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}
      >
        <div
          className="position-absolute top-50 start-50 translate-middle text-center text-white p-3"
          style={{ maxWidth: '600px' }}
        >
          <p className="text-uppercase fw-bold small mb-1">Providing Amazing</p>
          <h2 className="fw-bold mb-3">Education WordPress Theme</h2>
          <p className="mb-4">
            The next level of LMS WordPress Theme. Learn anytime and anywhere.
          </p>
          <button className="btn btn-warning text-white fw-semibold px-4">
            <i className="fas fa-book-reader me-2"></i>Explorer Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordPressThems;
