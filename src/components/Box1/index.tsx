import { motion } from 'framer-motion';
import { useState } from 'react';

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="box_container">
            <motion.div
                onClick={() => setIsAnimating((prev) => !prev)}
                className="box"
                animate={{
                    x: isAnimating ? 1600 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                }}
                initial={{
                    opacity: 0.2,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 60,
                }}
            ></motion.div>
        </div>
    );
};

export default Box1;
