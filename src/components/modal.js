import React, {memo} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCount } from '../context/context';
import { Link } from 'react-router-dom';
import Variants from './variants';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    margin: "auto",
    y: "200px", 
    opacity: 1,
    transition: { delay: 0.5 }
  },
}

const Modal = ({showModal}) => {
  const {state}=useCount();
  const n=state.raw.n[0]
  const ef=state.raw.f
  const et=state.raw.t[0]
  const eT=state.raw.T[0]
  var say, soy
  if (ef[0]===eT || ef[1]===eT || ef[2]===eT){
    say='You got it after '+et+' trial(s), I rolled a '+eT+'.'
  } else {
    say='You missed it after 3 trials, I rolled a '+eT+'.'
  }
  if (n<5){
    soy="/roll"
  } else {
    soy="/lastpage"
  }
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modale"
            variants={modal}
          >
            <p>{say}</p>
            <Link to={soy}><motion.button className='btn btn--play motion3'  variants={Variants} style={{marginBottom: "8%", position: "relative"}}
               whileHover="hover"><i className='bi bi-dice-6'> Continue</i></motion.button></Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

}

export default memo(Modal);