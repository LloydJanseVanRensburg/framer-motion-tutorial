import { motion } from 'framer-motion';

const Box2 = () => {
    return (
        <div className="box_container">
            <motion.div
                className="box"
                whileHover={{
                    scale: 1.1,
                }}
                whileTap={{
                    scale: 0.9,
                }}
                drag
                dragConstraints={{
                    right: 20,
                    left: -20,
                    top: 5,
                    bottom: 5,
                }}
                initial={{
                    opacity: 1,
                }}
            ></motion.div>
        </div>
    );
};

export default Box2;
