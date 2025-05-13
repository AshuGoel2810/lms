import React from 'react';
import ncourses from '../../ncourses.json'

// Reusable CourseCard component
const CourseCard = ({ view, data }) => (
  <div className={`card mb-3 ${view === 'grid' ? '' : 'flex-row'}`}>
    <img
      src={data.image}
      className={`img-fluid ${view === 'grid' ? '' : 'w-25 object-fit-cover'}`}
      alt="Course"
    />
    <div className="card-body">
      <p className="text-muted mb-1">by {data.author}</p>
      <h5 className="card-title">{data.title}</h5>
      <p className="text-muted mb-1">
        <i className="fas fa-clock me-1"></i> {data.duration}
        &nbsp; <i className="fas fa-user me-1"></i> {data.students}
        &nbsp; <i className="fas fa-signal me-1"></i> {data.level}
        &nbsp; <i className="fas fa-book me-1"></i> {data.lessons}
      </p>
      <p className="fw-bold text-success mb-0">
        {data.price} <span className="text-muted text-decoration-line-through">$29.0</span> Free
      </p>
    </div>
  </div>
);

// Parent component that uses CourseCard
const CourseList = ({ view = 'grid' }) => {


  return (
    <>
      {ncourses.map((course, index) => (
        <CourseCard key={index} view={view} data={course} />
      ))}
    </>
  );
};

export default CourseList;
