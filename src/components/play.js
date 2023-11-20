import React, {useEffect, useState, memo} from "react";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import Butt from "./butt";
import Variants from "./variants";
import dice1 from "../images/dice-1.png";
import dice2 from "../images/dice-2.png";
import dice3 from "../images/dice-3.png";
import dice4 from "../images/dice-4.png";
import dice5 from "../images/dice-5.png";
import dice6 from "../images/dice-6.png";
import { useCount } from "../context/context";

const Play =({setShowmodal})=> {
    var view
    const {state, dispatch}=useCount()
    const [disad, setdisad]=useState("");
    const [disab, setdisab]=useState("");
    var {n, f, m1, p, T, t, points, data, modal}=state.raw
    var statement
    var user={n, f, m1, p, T, t, points, data, modal}
    var en=n[0]
    T=T[0]
    t=t[0]
    points=points[0]
    if (m1[0]===0){
        statement="Guess the rolled face?"
    } else {
        statement="Missed! Try again, guess the rolled face?"
    }
    if (n[0]===0){
        view="nothing"
    } else {
        view="trial-rem"
    }

    const Condition=(i)=>{ 
        if (i===3){
            p[n[0]+1]=p[n[0]]+0;
            f[4]=0;
            data['Round '+(n[0]+1)]=f;
            n[0]=en+1
            setShowmodal(true)
        } else {
            t=t+1
        }
    }

    const Pre_trial=(m,m1,t)=>{
        f[t-1]=m;
        f[3]=T;
        data['Round '+(n[0]+1)]=f;
        if (m===T){
            f[4]=4-t;
            data['Round '+(n[0]+1)]=f;
            p[n[0]+1]=p[n[0]]+(4-t);          
            points=points+ (4-t)
            n[0]=en+1
            setShowmodal(true)
        } else {
            m1[t-1]=m;
            Condition(t);
        }
    }

    const Trial=(m,m1)=>{
        Pre_trial(m,m1,t)
    }
    

    const Click=(m1, m)=>{
        if (m!==m1[0] && m!==m1[1]){
            Trial(m,m1);
        }
        T=[T]
        t=[t]
        points=[points]
        user={n, f, m1, p, T, t, points, data, modal}
        dispatch({type: "save", payload: user})
    }


    return (
        <motion.div id="main"
            variants={Variants}
            initial="hidden3"
            animate="visible2"
            exit="exit3"
        >
            <article className="main3">
                <h1 className="begin">🎲 ROLL 'n' GUESS</h1>
                <h3 className="beginne" style={{textAlign: "start", marginLeft: 0}}>{`Round ${en+1}`} </h3>
                <div className="trials">
                    <div className="trial">
                        <span> Trial number: </span>
                        <span className="motion3">{t}</span>
                    </div>
                    <div className="trial-rem">
                        <span> Number of remaining trials: </span>
                        <span className="motion3">{3-t}</span>
                    </div>
                </div>
                <span className="statement">{statement}</span>!
                <div className="new">
                    <div className="images">
                        <div>
                            <span><Butt mkey="1" disad={disad} setdisad={setdisad} disab={disab} setdisab={setdisab} array={m1} clic={Click}  ><img src={dice1} alt="" className="dice--"/></Butt></span>
                            <span><Butt mkey="2" disad={disad} setdisad={setdisad}  disab={disab} setdisab={setdisab} array={m1} clic={Click} ><img src={dice2} alt="" className="dice--"/></Butt></span>
                            <span><Butt mkey="3" disad={disad} setdisad={setdisad}  disab={disab} setdisab={setdisab} array={m1} clic={Click}  ><img src={dice3} alt="" className="dice--"/></Butt></span>
                        </div>
                        <div>
                            <span><Butt mkey="4" disad={disad} setdisad={setdisad} disab={disab} setdisab={setdisab} array={m1} clic={Click}  ><img src={dice4} alt="" className="dice--"/></Butt></span>
                            <span><Butt mkey="5" disad={disad} setdisad={setdisad} disab={disab} setdisab={setdisab} array={m1} clic={Click} ><img src={dice5} alt="" className="dice--"/></Butt></span>
                            <span><Butt mkey="6" disad={disad} setdisad={setdisad}  disab={disab} setdisab={setdisab} array={m1} clic={Click}  ><img src={dice6} alt="" className="dice--"/></Butt></span>
                        </div>
                    </div>
                </div>
                <div className="exitview">
                    <div className="trial">
                        <Link to="/" style={{textDecoration: "none"}}><button className="btn2 exit" ><span className="x">x</span><span>Exit game</span></button></Link>
                    </div>
                    <div className={view}>
                        <Link to="/view" style={{textDecoration: "none"}}><motion.button className="btn2 view motion3"
                            variants={Variants}
                            whileHover="hover"
                        ><span>&#9658;</span><span>View status</span></motion.button></Link>
                    </div>
                </div>
            </article>
        </motion.div>
    )
}

export default memo(Play);