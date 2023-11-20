import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Variants from './variants';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { 
    y: "200px", 
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const Modal1 = ({showModal1, setShowmodal1}) => {
  return (
    <AnimatePresence>
      { showModal1 && (
        <motion.div className="backdropp"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modale"
            variants={modal}
          >
            <p>The page has beeen printed successfully to PDF format.</p>
            <motion.button className='btn btn--play motion3'  variants={Variants} style={{marginBottom: "8%"}}
              onClick={()=>setShowmodal1(false)}
               whileHover="hover"><i className='bi bi-dice-2'> Return to Result page</i></motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal1;