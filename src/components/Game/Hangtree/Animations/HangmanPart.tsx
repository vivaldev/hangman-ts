import { motion } from "framer-motion";

// Props for HangmanPart component
interface HangmanPartProps {
  path: string; // SVG path that defines what the hangman part looks like
  isVisible: boolean; // Boolean value that determines if the hangman part is visible
}

// HangmanPart component creates an animation for each part of the hangman
const HangmanPart: React.FC<HangmanPartProps> = ({ path, isVisible }) => {
  return (
    // Uses framer-motion's motion.path to create the animation
    <motion.path
      d={path}
      // At the start of the animation, pathLength is 0, making the path invisible
      initial={{ pathLength: 0 }}
      // When isVisible prop is true, pathLength is set to 1, making the path visible
      animate={{ pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      stroke="black"
      strokeWidth="2"
      fill="none"
    />
  );
};

export default HangmanPart;
