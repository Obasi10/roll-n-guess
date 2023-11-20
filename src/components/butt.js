import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Variants from "./variants";
import { useCount } from "../context/context";


const Butt =(props)=>{
    var m=Number(props.mkey)
    var m1=props.array

    const disableHover=(m1, m)=>{
        if (m1[0]!==m && m1[1]!==m && m1[2]!==m){
            props.setdisab("hover3")
            return props.disab
        } 
    }

    const disableColor=(m1,m)=>{
        if (m1[0]===m||m1[1]===m||m1[2]===m){
            props.setdisad("animate2")
            return props.disad
        }
    }
     
    return(
        <motion.button
            variants={Variants}
            animate={()=>disableColor(m1,m)}
            whileHover={()=>disableHover(m1,m)}
            className="btn1"
            onClick={()=>{
                props.clic(m1, m);
            }}
            
        >
            {props.children}
        </motion.button>
    )
}

export default Butt