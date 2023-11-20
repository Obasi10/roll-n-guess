import React, {memo, useState} from "react";
import {Route, Routes, Navigate, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"
import Home from '../src/components/home';
import About from "../src/components/about";
import Roll from "../src/components/roll";
import Lastpage from "../src/components/lastpage";
import Play from "../src/components/play";
import View from "../src/components/view";
import Modal from "./components/modal";
import Modal1 from "./components/modal1";
import { useCount } from "./context/context";
import Copyright from "./components/copyright";

const App=()=> {
  const location=useLocation()
  var {state}=useCount()
  var n=state.raw.n[0]
  var T=state.raw.T[0]
  const [showModal, setShowmodal]=useState(false)
  const [showModal1, setShowmodal1]=useState(false)
  return (
    <>
      <Modal showModal={showModal}/>
      <Modal1 showModal1={showModal1} setShowmodal1={setShowmodal1}/>
      <AnimatePresence mode="wait" 
          onExitComplete={()=>{
            setShowmodal(false)
            setShowmodal1(false)
           }}
      >
          <Routes location={location} key={location.key}>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
            <Route 
              path="/roll"
              element={n<=5? <Roll
              />: <Navigate to="/" />}
            />
            <Route 
              path="/view"
              element={n!==0? <View />: <Navigate to="/" />}
            />
            <Route 
              path="/lastpage"
              element={n>=5? <Lastpage setShowmodal1={setShowmodal1}/> : <Navigate to="/" />}
            />
            <Route 
              path="/play"
              element={n<=5 && T!==0?<Play setShowmodal={setShowmodal}
              />: <Navigate to="/roll" />}
            />
          </Routes>
          <Copyright />

      </AnimatePresence>
    </>
   
  );
}

export default memo(App);
