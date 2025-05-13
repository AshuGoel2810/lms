import React from 'react'

const FilterSidebar = () => {
    return (
      <div className="bg-white border rounded p-3 shadow-sm">
        {/* Course Category */}
        <div className="mb-4">
          <h6 className="fw-bold mb-3">Course Category <span className="text-muted">(08)</span></h6>
          {[
            'Commercial', 'Office', 'Shop', 'Educate', 'Academy',
            'Single family home', 'Studio', 'University'
          ].map((item, i) => (
            <div key={i} className="form-check d-flex justify-content-between align-items-center mb-2">
              <div>
                <input className="form-check-input me-2" type="checkbox" id={`cat-${i}`} />
                <label className="form-check-label" htmlFor={`cat-${i}`}>{item}</label>
              </div>
              <span className="text-muted">(15)</span>
            </div>
          ))}
        </div>
  
        {/* Instructor */}
        <div className="mb-4">
          <h6 className="fw-bold mb-3">Instructors <span className="text-muted">(02)</span></h6>
          {['Kenny White', 'John Doe'].map((name, i) => (
            <div key={i} className="form-check mb-2">
              <input className="form-check-input me-2" type="checkbox" id={`inst-${i}`} />
              <label className="form-check-label" htmlFor={`inst-${i}`}>{name}</label>
            </div>
          ))}
        </div>
  
        {/* Price */}
        <div className="mb-4">
          <h6 className="fw-bold mb-3">Price</h6>
          {['All', 'Free', 'Paid'].map((price, i) => (
            <div key={i} className="form-check mb-2">
              <input className="form-check-input me-2" type="radio" name="price" id={`price-${i}`} />
              <label className="form-check-label" htmlFor={`price-${i}`}>{price}</label>
            </div>
          ))}
        </div>
  
        {/* Review */}
        <div className="mb-4">
          <h6 className="fw-bold mb-3">Review</h6>
          {[5, 4, 3, 2, 1].map((stars, i) => (
            <div key={i} className="form-check mb-2">
              <input className="form-check-input me-2" type="radio" name="review" id={`review-${i}`} />
              <label className="form-check-label" htmlFor={`review-${i}`}>
                {'★'.repeat(stars)}{'☆'.repeat(5 - stars)} <span className="text-muted">(1,025)</span>
              </label>
            </div>
          ))}
        </div>
  
        {/* Level */}
        <div>
          <h6 className="fw-bold mb-3">Level</h6>
          {['All levels', 'Beginner', 'Intermediate', 'Expert'].map((level, i) => (
            <div key={i} className="form-check mb-2">
              <input className="form-check-input me-2" type="checkbox" id={`level-${i}`} />
              <label className="form-check-label" htmlFor={`level-${i}`}>{level}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default FilterSidebar

