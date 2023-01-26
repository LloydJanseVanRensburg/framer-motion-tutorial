import { motion, Variants } from 'framer-motion';

const Box3 = () => {
    const boxVariant: Variants = {
        hidden: {
            x: '-100vw',
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.2,
            },
        },
    };

    const childVariant: Variants = {
        hidden: {
            x: -10,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    };

    return (
        <div className="box_container">
            <motion.div
                className="box"
                variants={boxVariant}
                animate="visible"
                initial="hidden"
            >
                {[1, 2, 3].map((el) => (
                    <motion.div
                        className="box_item"
                        variants={childVariant}
                    ></motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Box3;
