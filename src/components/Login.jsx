import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            emailOrUsername: '',
            password: '',
        },
        validationSchema: Yup.object({
            emailOrUsername: Yup.string().required('Required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
        }),
        onSubmit: async (values) => {
            try {
                const res = await axios.post('http://localhost:5000/api/auth/login', {
                    email: values.emailOrUsername,
                    password: values.password,
                });

                setSuccessMsg('Login successful!');
                setErrorMsg('');
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            } catch (error) {
                setErrorMsg(error.response?.data?.message || 'Login failed');
                setSuccessMsg('');
            }
        },
    });

    return (
        <div className="d-flex justify-content-center align-items-center py-4 bg-light">
            <motion.div
                className="bg-white p-4 rounded-4 shadow-sm login-w"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                style={{ width: '400px' }}
            >
                <h4 className="fw-bold mb-4">Login</h4>

                <form onSubmit={formik.handleSubmit}>
                    <input
                        className="form-control mb-2 rounded-3"
                        type="text"
                        name="emailOrUsername"
                        placeholder="Email or username*"
                        value={formik.values.emailOrUsername}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.emailOrUsername && formik.errors.emailOrUsername && (
                        <div className="text-danger mb-2">{formik.errors.emailOrUsername}</div>
                    )}

                    <div className="position-relative mb-2">
                        <input
                            className="form-control rounded-3 pe-5"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password*"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <span
                            className="position-absolute top-50 end-0 translate-middle-y me-3 cursor-pointer"
                            onClick={togglePasswordVisibility}
                            style={{ cursor: 'pointer' }}
                        >
                            <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                        </span>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-danger mb-2">{formik.errors.password}</div>
                    )}

                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" id="rememberMe" />
                        <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                        </label>
                    </div>

                    <motion.button
                        type="submit"
                        className="btn w-100 text-white rounded-pill"
                        style={{ backgroundColor: '#ff6a00' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Login
                    </motion.button>
                </form>

                {successMsg && (
                    <motion.div
                        className="alert alert-success mt-3 py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {successMsg}
                    </motion.div>
                )}

                {errorMsg && (
                    <motion.div
                        className="alert alert-danger mt-3 py-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                    >
                        {errorMsg}
                    </motion.div>
                )}

                <p className="text-center mt-3 mb-0 login-fnt">
                    <a href="#" className="text-decoration-none">Lost your password?</a>
                </p>
            </motion.div>
        </div>
    );
};

export default Login;
