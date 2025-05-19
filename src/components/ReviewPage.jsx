import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faReply } from '@fortawesome/free-solid-svg-icons';
import review from '/assets/review.png';

export default function ReviewPage() {
  const stars = [5, 4, 3, 2, 1];
  const reviews = [1, 2, 3]; // Dummy data to map 3 reviews

  return (
    <div className="container my-5" style={{maxWidth: '600px'}}>
      <h5 className="fw-bold">Comments</h5>

      {/* Overall Rating */}
      <div className="d-flex align-items-center mb-3">
        <h2 className="mb-0 me-2">4.0</h2>
        <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
        <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
        <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
        <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
        <FontAwesomeIcon icon={faStar} className="text-secondary me-2" />
        <span className="text-muted">based on 146,951 ratings</span>
      </div>

      {/* Rating Breakdown */}
      <div className="mb-4">
        {stars.map((star, index) => (
          <div className="d-flex align-items-center mb-2" key={index}>
            <span className="me-2">{star} star</span>
            <div className="progress w-100" style={{ height: '6px' }}>
              <div
                className="progress-bar bg-warning"
                style={{ width: `${[90, 5, 2, 2, 1][index]}%` }}
              ></div>
            </div>
            <span className="ms-2 text-muted">{[90, 5, 2, 2, 1][index]}%</span>
          </div>
        ))}
      </div>

      {/* Reviews */}
      {reviews.map((_, index) => (
        <div className="d-flex mb-4 border-bottom pb-3" key={index}>
          <img
            src= {review}
            className="rounded-circle me-3 hw-avatar"
            alt="avatar"
            
          />
          <div>
            <div className="d-flex justify-content-between align-items-center mb-1">
              <strong>Laura Hipster</strong>
              <span className="text-muted small">October 03, 2022</span>
            </div>
            <p className="mb-1 text-muted" style={{ maxWidth: '700px' }}>
              Quisque nec non amet quis. Varius tellus justo odio parturient mauris
              curabitur lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed
              faucibus bibendum augue id cras purus. At eget euismod cursus non. Molestie
              dignissim sed volutpat feugiat vel.
            </p>
            <div className="text-danger" style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faReply} className="me-1" /> Reply
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center mt-4">
          <li className="page-item disabled">
            <a className="page-link" href="#">&lt;</a>
          </li>
          {[1, 2, 3].map((page) => (
            <li key={page} className={`page-item ${page === 1 ? 'active' : ''}`}>
              <a className="page-link" href="#">{page}</a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" href="#">&gt;</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
