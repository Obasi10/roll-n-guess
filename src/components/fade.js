import React from 'react';
import { motion } from 'framer-motion';

const Fade=()=>{

  return (
    <motion.div className="motion"
      animate={{
        x:[0,-300,0,300,0],
        transition:{
          delay:2,
          duration:50,
          repeat:Infinity,
          ease: "easeInOut",
          spring: 120
        }
      }} 
    >

    </motion.div>
  )
}
export default Fade