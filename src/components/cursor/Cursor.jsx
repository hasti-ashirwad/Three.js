import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor "
      animate={{ x: position.x+10, y: position.y+10 }}
      style={{width:"40px",height:"40px",borderRadius:"50%",border:"1px solid black",position:"fixed",zIndex:999}}
    ></motion.div>
  );
};

export default Cursor;