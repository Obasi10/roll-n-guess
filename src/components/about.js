import React from "react";
import { Link } from "react-router-dom";
import Pic from "../images/IMG-20211001-WA0003.jpg";
import { motion } from "framer-motion";
import Variants from "./variants";

const About=()=>{
    return(
        <div id="main">
            <article className="post main1">
                <h1 className="begin">🎲 ROLL 'n' GUESS</h1>
                    <div>
                        <span className="date">About me</span>
                        <h1 style={{textTransform:"capitalize", textAlign: "center", marginTop: "4%", marginBottom: "3%", fontWeight: 700}} className="display3 motion3">Innocent Chukwuma Obasi
                        </h1>
                        <img className="styleimg" src={Pic} alt=""/>
                        <p>A Quick learner and innovative 
                            thinker with over five years of hands-on engineering training and learning. Highly skilled in research and numerical modelling of engineering systems. Provides strategic leadership and facilitate tutoring; able to work as a team member or independently
                            . A thorough analyst when it comes to transforming conflicting data into a more comprehendible and enjoyable form.</p>
                    </div>
                    <div className="trials" style={{marginTop: "4%", textAlign: "center", justifyContent: "space-around"}}>
                        <div className="trial" style={{textAlign: "start"}}>
                            <Link to="https://innocent-obasi.vercel.app/" target="_blank"><motion.button className="btn motion3" variants={Variants} whileHover="hover"><i className="bi bi-person-bounding-box"> visit Portfolio</i></motion.button></Link>
                        </div>
                        <div className="trial-rem">
                            <Link to="/" ><motion.button className="btn motion3" variants={Variants} whileHover="hover"
                             style={{ textTransform:"capitalize"}}>&#9658; Return to Home page</motion.button></Link>
                        </div>
                    </div>
            </article>
        </div>
    )
}

export default About