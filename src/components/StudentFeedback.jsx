import React from 'react';

const feedbacks = [
  {
    text: "I must explain to you how all this mistaken. Idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    role: "Designer"
  },
  // Add more identical or unique entries if desired
  {
    text: "I must explain to you how all this mistaken. Idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    role: "Designer"
  },
  {
    text: "I must explain to you how all this mistaken. Idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    role: "Designer"
  },
  {
    text: "I must explain to you how all this mistaken. Idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
    name: "Roe Smith",
    role: "Designer"
  }
];

const StudentFeedbacks = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="fw-bold">Student Feedbacks</h2>
      <p className="text-muted">What Students Say About Academy LMS</p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
        {feedbacks.map((feedback, index) => (
          <div className="col" key={index}>
            <div className="border rounded-3 p-4 h-100">
              <i className="fas fa-quote-left text-secondary fs-4"></i>
              <p className="text-muted mt-3" style={{ fontSize: '14px' }}>{feedback.text}</p>
              <div className="fw-bold">{feedback.name}</div>
              <div className="text-secondary" style={{ fontSize: '13px' }}>{feedback.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentFeedbacks;
