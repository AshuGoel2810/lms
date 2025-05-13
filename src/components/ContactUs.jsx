import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Contact Info */}
        <div className="col-md-4 mb-4">
          <h4 className="fw-bold">Need A Direct Line?</h4>
          <p className="text-muted">
            Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.
          </p>
          <div className="d-flex align-items-start mb-3">
            <div className="me-3">
              <div className="bg-light p-2 rounded">
                <FontAwesomeIcon icon={faPhone} className="text-warning fs-4" />
              </div>
            </div>
            <div>
              <div className="fw-bold">Phone</div>
              <div>+91-9999910100</div>
            </div>
          </div>

          <div className="d-flex align-items-start">
            <div className="me-3">
              <div className="bg-light p-2 rounded">
                <FontAwesomeIcon icon={faEnvelope} className="text-warning fs-4" />
              </div>
            </div>
            <div>
              <div className="fw-bold">Email</div>
              <div>contact@edupulse.com</div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="col-md-8">
          <div className="rounded overflow-hidden shadow">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.728956150136!2d77.03650397527741!3d28.408912675779344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1886b94f84ab%3A0x9e77c70c2f1bb734!2sCyber%20City%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-5">
        <h5 className="fw-bold">Contact Us</h5>
        <p className="text-muted">
          Your email address will not be published. Required fields are marked *
        </p>

        <form>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input type="text" className="form-control" placeholder="Name*" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Email*" required />
            </div>
          </div>

          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Comment" required></textarea>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label className="form-check-label" htmlFor="saveInfo">
              Save my name, email in this browser for the next time I comment
            </label>
          </div>

          <button type="submit" className="btn btn-warning rounded-pill px-4">
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
}
