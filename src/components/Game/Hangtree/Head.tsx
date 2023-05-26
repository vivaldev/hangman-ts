import { motion } from "framer-motion";

const Head = () => {
  return (
    <motion.svg
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      height="100"
      width="100"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        strokeWidth="3"
        fill="white"
      />
    </motion.svg>
  );
};

export default Head;
