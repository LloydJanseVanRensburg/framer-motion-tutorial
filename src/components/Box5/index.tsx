import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Box5 = () => {
    const control = useAnimation();

    return (
        <div className="box_container">
            <button
                onClick={() => {
                    control.start({
                        x: 0,
                        transition: {
                            duration: 2,
                        },
                    });
                }}
            >
                Move to left
            </button>

            <button
                onClick={() => {
                    control.start({
                        x: 1500,
                        transition: {
                            duration: 2,
                        },
                    });
                }}
            >
                Move to right
            </button>

            <button
                onClick={() => {
                    control.start({
                        borderRadius: '50%',
                        transition: {
                            duration: 1,
                        },
                    });
                }}
            >
                Circle
            </button>

            <button
                onClick={() => {
                    control.start({
                        borderRadius: 0,
                        transition: {
                            duration: 1,
                        },
                    });
                }}
            >
                Square
            </button>

            <button
                onClick={() => {
                    control.stop();
                }}
            >
                Stop
            </button>

            <motion.div className="box" animate={control}></motion.div>
        </div>
    );
};

export default Box5;
