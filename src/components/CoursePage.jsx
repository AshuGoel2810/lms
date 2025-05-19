import React, { useState } from 'react';
import FilterSideBar from './course/FilterSideBar';
import CourseCard from './course/CourseList';
import ncourses from '../ncourses.json';

const CoursePage = () => {
  const [view, setView] = useState('grid');
  console.log(ncourses);
  return (
    <>
      <div className="container my-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold">All Courses</h4>
          <div>
            <button className={`btn me-2 ${view === 'list' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setView('list')}>
              <i className="fas fa-list"></i>
            </button>
            <button className={`btn ${view === 'grid' ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setView('grid')}>
              <i className="fas fa-th-large"></i>
            </button>
          </div>
        </div>

        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <FilterSideBar />
          </div>

          {/* Course List/Grid */}
          <div className="col-md-9">
            <div className="row">
              {ncourses.map((course, i) => (
                <div key={i} className={`card mb-3 ${view === 'grid' ? 'col-md-6 mb-4' : 'flex-row col-12'}`}>
                  <img
                    src={`/assets/fcourse/${course.image}`}
                    className={`img-fluid ${view === 'grid' ? '' : 'w-25 object-fit-cover'}`}
                    alt="Course"
                  />
                  <div className="card-body">
                    <p className="text-muted mb-1">by {course.author}</p>
                    <h5 className="card-title">{course.title}</h5>
                    <p className="text-muted mb-1">
                      <i className="fas fa-clock me-1"></i> {course.duration}
                      &nbsp; <i className="fas fa-user me-1"></i> {course.students}
                      &nbsp; <i className="fas fa-signal me-1"></i> {course.level}
                      &nbsp; <i className="fas fa-book me-1"></i> {course.lessons}
                    </p>
                    <p className="fw-bold text-success mb-0">
                      {course.price} <span className="text-muted text-decoration-line-through">$29.0</span> Free
                    </p>
                  </div>
                </div>
            
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li className="page-item"><button className="page-link">&laquo;</button></li>
              <li className="page-item active"><button className="page-link">1</button></li>
              <li className="page-item"><button className="page-link">2</button></li>
              <li className="page-item"><button className="page-link">3</button></li>
              <li className="page-item"><button className="page-link">&raquo;</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default CoursePage
