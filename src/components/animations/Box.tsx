import { motion } from "framer-motion";

export const Box: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      style={{ width: "100px", height: "100px", backgroundColor: "red" }}
    />
  );
};
