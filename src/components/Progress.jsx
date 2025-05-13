import React from 'react';
import { motion } from 'framer-motion';

const WorkInProgress = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center"
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mb-4"
                >
                    <i className="fas fa-tools fa-5x text-warning"></i>
                </motion.div>

                <motion.h2
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-3"
                >
                    Work in Progress
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="text-muted"
                >
                    We're working hard to bring this page to life. Please check back soon!
                </motion.p>


                <motion.a
                    href="/"
                    initial={{ boxShadow: '0 0 0px rgba(255,193,7,0)' }}
                    animate={{
                        boxShadow: [
                            '0 0 0px rgba(255,193,7,0)',
                            '0 0 10px rgba(255,193,7,0.6)',
                            '0 0 20px rgba(255,193,7,0.8)',
                            '0 0 10px rgba(255,193,7,0.6)',
                            '0 0 0px rgba(255,193,7,0)'
                        ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        background: 'linear-gradient(135deg, #ffc107, #d39e00)',
                        color: '#212529',
                        padding: '12px 28px',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        display: 'inline-block',
                        fontSize: '1.1rem',
                        transition: 'background 0.3s ease',
                        border: 'none'
                    }}
                >
                    🏠 Go to Homepage
                </motion.a>
            </motion.div>
        </div>
    );
};

export default WorkInProgress;
