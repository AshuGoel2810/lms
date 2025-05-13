import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [feedback, setFeedback] = useState({ type: '', message: '' });

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        username: Yup.string().min(3, 'Minimum 3 characters').required('Username is required'),
        password: Yup.string().min(6, 'Minimum 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm your password'),
    });

    const handleSubmit = async (values, { resetForm }) => {
        setFeedback({ type: '', message: '' });

        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                email: values.email,
                username: values.username,
                password: values.password,
            });

            if (res.status === 200 || res.status === 201) {
                setFeedback({ type: 'success', message: 'Registration successful!' });
                resetForm();
            }
        } catch (err) {
            setFeedback({
                type: 'error',
                message: err.response?.data?.message || 'Registration failed!',
            });
        }

        setTimeout(() => setFeedback({ type: '', message: '' }), 3000);
    };

    const toggleVisibility = (type) => {
        if (type === 'password') setShowPassword((prev) => !prev);
        else setShowConfirmPassword((prev) => !prev);
    };

    return (
        <div className="d-flex justify-content-center align-items-center py-4 bg-light">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-4 rounded-4 shadow-sm"
                style={{ width: '400px' }}
            >
                <motion.h4
                    className="fw-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Register
                </motion.h4>

                <Formik
                    initialValues={{ email: '', username: '', password: '', confirmPassword: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <Form>
                            {/* Email Field */}
                            <div className="mb-3">
                                <Field name="email" type="email" className="form-control rounded-3" placeholder="Email*" />
                                <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                            </div>

                            {/* Username Field */}
                            <div className="mb-3">
                                <Field name="username" type="text" className="form-control rounded-3" placeholder="Username*" />
                                <ErrorMessage name="username" component="div" className="text-danger small mt-1" />
                            </div>

                            {/* Password Field */}
                            <div className="position-relative mb-3">
                                <Field
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control rounded-3 pe-5"
                                    placeholder="Password*"
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => toggleVisibility('password')}
                                >
                                    <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </span>
                                <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
                            </div>

                            {/* Confirm Password Field */}
                            <div className="position-relative mb-3">
                                <Field
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    className="form-control rounded-3 pe-5"
                                    placeholder="Confirm Password*"
                                />
                                <span
                                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => toggleVisibility('confirmPassword')}
                                >
                                    <i className={`fa-solid ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </span>
                                <ErrorMessage name="confirmPassword" component="div" className="text-danger small mt-1" />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                className="btn w-100 text-white rounded-pill mb-3"
                                style={{ backgroundColor: '#ff6a00' }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Register
                            </motion.button>
                        </Form>
                    )}
                </Formik>

                {/* Feedback Messages */}
                <AnimatePresence>
                    {feedback.message && (
                        <motion.div
                            key={feedback.message}
                            className={`alert ${feedback.type === 'success' ? 'alert-success' : 'alert-danger'
                                } py-2 px-3`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            {feedback.message}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.p
                    className="text-center mb-0 mt-3"
                    style={{ fontSize: '0.9rem' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    Already have an account?{' '}
                    <span
                        className="text-primary"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </span>
                </motion.p>

            </motion.div>
        </div>
    );
};

export default Register;
