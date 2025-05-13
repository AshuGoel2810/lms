import React from 'react';
import grow from '../assets/grow.png'

const CustomerData = () => {
    const stats = [
        {
            icon: 'fas fa-user-graduate',
            value: '25K+',
            label: 'Active Students',
        },
        {
            icon: 'fas fa-book',
            value: '899',
            label: 'Total Courses',
        },
        {
            icon: 'fas fa-chalkboard-teacher',
            value: '158',
            label: 'Instructor',
        },
        {
            icon: 'fas fa-smile',
            value: '100%',
            label: 'Satisfaction Rate',
        },
    ];

    return (
        <>
            <div className="container py-5">
                <div className="row text-center">
                    {stats.map((stat, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <div className="bg-light rounded py-4 px-2 shadow-sm">
                                <i className={`${stat.icon} fa-2x text-warning mb-2`}></i>
                                <h4 className="text-orange fw-bold">{stat.value}</h4>
                                <p className="mb-0">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>

                <div className="container py-5">
                    <div className="row align-items-center">
                        {/* Left Side: Illustration */}
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src={grow}
                                alt="LearnPress Illustration"
                                className="img-fluid"
                            />
                        </div>

                        {/* Right Side: Content */}
                        <div className="col-md-6">
                            <h3 className="fw-bold mb-3">Grow Us Your Skill With LearnPress LMS</h3>
                            <p className="text-muted mb-4">
                                We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                            </p>
                            <ul className="list-unstyled mb-4">
                                {[1, 2, 3, 4].map((_, index) => (
                                    <li className="mb-2" key={index}>
                                        <i className="fas fa-check-circle text-success me-2"></i>
                                        Certification
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-warning text-white fw-semibold px-4">
                                Explorer Course
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>


    );
};

export default CustomerData;




