import React from 'react';
import '../style/banner.css';

const Banner = () => {
    return (
        <section className="container-fluid p-0 mb-3 position-relative welcome_page d-flex align-items-center">
            <div className="container">
                <div className="text-start text-white banner-content">
                    <h1 className="banner-title fw-bold">Build Skills With<br />Online Course</h1>
                    <p className="banner-subtext">
                        We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.
                    </p>
                    <button className="btn btn-warning text-white px-4 py-2 rounded-pill fw-semibold shadow-sm">
                        Posts Comment
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
