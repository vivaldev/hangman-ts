import { useGame } from "../../context/GameProvider";
import HangmanPart from "./Animations/HangmanPart";

// Paths for each part of the hangman
const paths = [
  "M20,90 H80", // Stand base
  "M50,90 V10", // Stand vertical
  "M50,10 H80", // Stand top
  "M80,10 V30", // Rope
  "M85,35 A5,5 0 1,1 75,35 A5,5 0 1,1 85,35", // Head (circle path)
  "M80,40 V60", // Body
  "M80,50 H70", // Left arm
  "M80,50 H90", // Right arm
  "M80,60 H70", // Left leg
  "M80,60 H90", // Right leg
];

// HangTree component creates a HangmanPart for each path
const HangTree = () => {
  const { wrongGuesses } = useGame();

  return (
    <svg
      viewBox="0 0 100 100"
      style={{ maxWidth: "300px", maxHeight: "300px" }}
    >
      {paths.map((part, index) => (
        // Each wrong guess makes the next part of the hangman appear
        <HangmanPart key={index} path={part} isVisible={wrongGuesses > index} />
      ))}
    </svg>
  );
};

export default HangTree;
