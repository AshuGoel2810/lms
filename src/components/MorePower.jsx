import React from 'react';
import mask_group from '../assets/mask_group.png';

const Banner = () => {
  return (
    <div
      className="container py-4 px-4"
      style={{
        backgroundImage: `url(${mask_group})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="row align-items-center" >
        <div className="col-md-5 p-4">
          <p className="text-uppercase text-muted mb-2" style={{ fontSize: '0.85rem' }}>
            Get more power from
          </p>
          <h2 className="fw-bold mb-3" style={{ fontSize: '1.8rem' }}>
            LearnPress Add-Ons
          </h2>
          <p className="text-muted" style={{ fontSize: '0.95rem' }}>
            The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.
          </p>
          <button className="btn btn-warning mt-3 text-white fw-semibold px-4 py-2 rounded-pill">
            Explorer Course
          </button>
        </div>
        <div className="col-md-6 d-none d-md-block">
          {/* Background image already visible here */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
