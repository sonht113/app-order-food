import { motion} from "framer-motion";
import React from 'react';

const animations = {
  initial: {opacity: 0, x: "-50%"},
  animate: {opacity: 1, x: 0},
  exit: {opacity: 0, x: "-50%"}
}
// @ts-ignore
const AnimatedPage = ({children}) => {
  return(
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration: 0.5}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedPage;