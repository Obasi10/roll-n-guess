import React, { useEffect, memo} from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import Variants from "./variants";
import { useCount } from "../context/context";
import dice from "../images/one-die-7495-bdbaccf577c7e7004519974681450a93@2x.jpg"


const Roll=()=> {
    const {state, dispatch}=useCount()
    const en=state.raw.n[0];
    const points=state.raw.points[0]
    useEffect(()=>{
        var {n, f, m1, p, T, t, points, data, modal}=state.raw
        t=[1];
        T=[Math.floor(Math.random()*6)+1];
        m1=[0,0,0];
        f=[];
        var user={n, f, m1, p, T, t, points, data, modal}
        dispatch({type: "save", payload: user})
    },[dispatch])
    return (

        <motion.div id="main1"
            variants={Variants}
            initial="hidden2"
            animate="visible"
            exit="exit2"
        >
            <article className="main2">
                <h1 className="begin">🎲 ROLL 'n' GUESS</h1> 
                <h2 className="begine" style={{textTransform: 'none'}}><span>
                    "... want to test your guessing ability? then be rest
                    </span>
                    <span> assured you are in the right place."</span>
                </h2>
                <h3 className="beginne"> {`Round ${en+1}`}</h3>
                <div className="beginner">
                    So far, you have obtained <span className="motion3">{points}</span> point(s) out of possible <span className="motion3">{en*3}</span> points. This is Round <span className="motion3">{en+1}</span>, you have <span className="motion3">{4-en}</span> more round(s) after this. 
                    Roll the die and guess the rolled face.
                </div>
                <img className="motion1" style={{ borderRadius: "20px"}} alt=" a die" src={dice} id="dice--4"
                />
                <Link style={{textDecoration: "none"}} to="/play">
                    <motion.button
                    variants={Variants}
                    whileHover="hover" className="btn btn--roll" style={{display: "flex", justifyContent: "center"}}
                    > <span className="motion3">🔄 Roll the Die</span></motion.button>
                </Link>
            </article>
        </motion.div>
    )
}


export default memo(Roll)