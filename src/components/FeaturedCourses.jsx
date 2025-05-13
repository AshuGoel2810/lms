import React from 'react';
import { motion } from 'framer-motion';
import feature from '../feature.json';

const FeaturedCourses = () => {
  return (
    <div className="py-5 container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold">Featured Courses</h4>
          <p className="text-muted m-0">Explore our Popular Courses</p>
        </div>
        <button className="btn btn-outline-dark rounded-pill px-4">All Courses</button>
      </div>

      <div className="row g-4">
        {feature.map((course, index) => (
          <motion.div
            className="col-12 col-sm-6 col-md-4"
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`card h-100 border-0 shadow-sm rounded-4 overflow-hidden ${course.highlight ? 'bg-light' : ''}`}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="position-relative">
                <img
                  src={`http://localhost:5173/src/assets/courses/${course.image}`}
                  alt={course.title}
                  className="card-img-top feature-card"
                />
                <span className="badge bg-dark position-absolute top-0 start-0 m-2">
                  {course.category}
                </span>
              </div>
              <div className="card-body">
                <small className="text-muted">by {course.instructor}</small>
                <h6 className={`mt-1 fw-semibold ${course.highlight ? 'text-warning' : 'text-dark'}`}>
                  {course.title}
                </h6>
                <div className="d-flex align-items-center gap-3 mb-2 text-muted small">
                  <span>
                    <i className="fas fa-clock me-1"></i> {course.weeks}
                  </span>
                  <span>
                    <i className="fas fa-user me-1"></i> {course.students} Students
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    {course.offer !== 'Free' ? (
                      <>
                        <del className="text-muted me-2">{course.price}</del>
                        <span className="fw-bold text-danger">{course.offer}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-muted">{course.price}</span>
                        <span className="ms-2 fw-bold text-success">{course.offer}</span>
                      </>
                    )}
                  </div>
                  <a href="#" className="text-decoration-none text-dark small fw-semibold">
                    View More
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
