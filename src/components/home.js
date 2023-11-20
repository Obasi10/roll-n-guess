import React, {useEffect, memo} from "react";
import { Link } from "react-router-dom";
import '../index.css';
import { motion} from "framer-motion";
import Variants from "./variants";
import { useCount } from "../context/context";
import Fade from "./fade";
import ErrorBoundary from "./playe";

const Home=()=> {
    const{dispatch}=useCount()
    useEffect(()=>{
        const user={
            n: [0],
            T: [],
            f:[],
            m1: [0,0,0],
            p: [0],
            t:[1],
            points: [0],
            data: {},
            modal: [false, false]
        }
        dispatch({type: "save", payload: user})
    },[dispatch])

    return (
        <>
            <motion.div id="main"
                variants={Variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <article className="main1">
                    <h1 className="begin">🎲 ROLL 'n' GUESS</h1>   
                    <h2 className="begine"><span>
                        "... want to test your guessing ability? then be rest
                    </span>
                    <span> assured you are in the right place."</span>
                    </h2>
                    <div className="table-responsive r" style={{}}>
                        <Fade />
                    </div>
                    <h2 className="beginne"> Game Rules</h2>
                    <ErrorBoundary>
                        <ul className="lists">
                            <motion.li className="beginner"
                                variants={Variants}
                                whileHover="hover2"
                            > In each round, the die is rolled. You have at most 3 trials to guess the rolled face.</motion.li>
                            <motion.li className="beginner"
                                variants={Variants}
                                whileHover="hover2"
                            > The earlier you guess it right, the more your points, wrong guess at the third trial will leave you with zero points for that round.</motion.li>
                        </ul>
                        <Link style={{textDecoration: "none", color: "purple"}} to="/roll"><motion.button className="btn btn--play"
                            variants={Variants}
                            whileHover="hover"
                        ><span className="motion3"><i className="bi bi-dice-5-fill"> Start game</i></span></motion.button></Link>       
                    </ErrorBoundary>
                </article>
            </motion.div>
        </>
    )
}


export default memo(Home)
