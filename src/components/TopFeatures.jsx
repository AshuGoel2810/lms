import React from 'react';
import courses from '../courses.json';

const TopFeatures = () => {
    return (
        <div className="py-5 container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4 className="fw-bold">Top Categories</h4>
                    <p className="text-muted m-0">Explore our Popular Categories</p>
                </div>
                <button className="btn btn-outline-dark rounded-pill px-4">All Categories</button>
            </div>

            <div className="row g-4">
                {courses.courses.map((item, index) => (
                    <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div
                            className={`text-center p-4 rounded-4 h-100 shadow-sm ${index === 1 ? 'bg-white border shadow active-card' : 'border'
                                }`}
                            style={{ transition: '0.3s', cursor: 'pointer' }}
                        >
                            <div className="mb-3 fs-3 text-warning">
                                <i className={`fa-solid ${item.icon}`}></i>
                            </div>
                            <h6 className={`mb-1 ${index === 1 ? 'text-orange' : 'text-dark fw-semibold'}`}>
                                {item.name}
                            </h6>
                            <p className="text-muted small mb-0">38 Courses</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopFeatures;
