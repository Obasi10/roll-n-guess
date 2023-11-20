
const Variants= {
    animate1:{
        x: [0, 20,40,60,80,100, 120, 140],
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
    animate2:{
        backgroundColor: "#a62b2b"
    },
    animate3:{
        transform: ["rotateZ(0)", "rotateZ(72deg)", "rotateZ(144deg)", "rotateZ(216deg)", "rotateZ(288deg)", "rotateZ(360deg)"],
        transition: {
            duration: 3,
            repeat: Infinity,
        }
    },
    animate4:{
        x: [-120, -100, -80, -60, -40, -20],
        transition: {
            x:{
                duration: 5,
                ease: "easeOut"
            },
        }
    },
    animate5:{
        x: [-20, -15, -10, -5, 0, 5, 10, 15, 20],
        transition: {
            x:{
                duration: 9,
                ease: "easeOut"
            }
        }
    },
    animate6:{
        x: [20, 70, 120, 70, -20, -70, -120],
        transition: {
            x:{
                duration: 5,
                ease: "easeOut",
                stiffness: 700,
                mass: 0.4,
                damping: 8
            }
        }
    },
    hover: {
        scale: 1.1,
        color: "#eeeeee",
        textShadow: "0px 0px 8px rgb(255,255,255, 0.03)",
        boxShadow: "0px 0px 8px rgb(255,255,255, 0.03)",
        transition: {
          duration: 0.8,
          repeat: 5
        }
    },
    hidden: { 
        opacity: 0, 
        x: '100vw' 
    },
    hidden2: { 
        opacity: 0, 
        x: '-100vw' 
    },
    hidden3: { 
        opacity: 0, 
        y: '100vh' 
    },
    hidden4: { 
        opacity: 0, 
        y: '-100vw' 
    },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { type: 'spring', delay: 0.5 }
    },
    visible2: { 
        opacity: 1, 
        y: 0,
        transition: { type: 'spring', delay: 0.5 }
    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: { ease: 'easeInOut' }
    },
    exit2: {
        x: "-100vw",
        transition: { 
            ease: 'easeInOut',
            when: "afterChildren"
        }
    },
    exit3: {
        x: "100vh",
        transition: { ease: 'easeInOut' }
    },
    exit4: {
        x: "100vh",
        transition: { ease: 'easeInOut' }
    },
    exit5: {
        x: "100vh",
        transition: { ease: 'easeInOut' }
    },
    hover2:{
        scale: 1.05, originX: 0, fontWeight: "bolder",
        transition:{
            type: "spring",
            stiffness: 300
        }
    },
    hover3:{
        scale: 1.1,
        backgroundColor: "#800080",
        transition: {
            repeat: Infinity,
            type: "spring",
            stiffness: 500,
            mass: 4
        }
    },

}

export default Variants