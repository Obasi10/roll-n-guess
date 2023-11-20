import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import Variants from "./variants";

const Copyright=()=>{
    return (
        <motion.footer className="align-center copyright">
                <span>&copy; 2023</span><span className="nav-item px-2">Designer: <motion.span variants={Variants} animate="designer"><Link to="/about" className="Designer" 
               >
                    Innocent obasi</Link></motion.span></span>
                    <motion.span style={{display: 'flex'}}><span className="px-2 nav-link border-0"><Link to="https://www.linkedin.com/in/innocent-obasi-72ab6022a" target="_blank" className="bi bi-linkedin"></Link></span>
                    <span className="px-2 nav-link border-0"><Link to="https://www.facebook.com/obasi.chukwuma.77" target="_blank" className="bi bi-facebook"></Link></span>
                    <span className="px-2 nav-link border-0"><Link to="https://wa.link/fjkcmd" target="_blank" className="bi bi-whatsapp"></Link></span></motion.span>
        </motion.footer>
    )
}

export default Copyright