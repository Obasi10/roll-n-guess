// import React, {useState}  from "react";

// const Context=React.createContext();

// export const ContextProvider=({children})=>{
//     var [n, setn]=useState(0)
//     var [f, setf]=useState([])
//     var [m1, setm1]=useState([0])
//     var [p, setp]=useState([0])
//     var [t, sett]=useState(1)
//     var [data, setData]=useState({})
//     var [points, setPoints]=useState(0)
//     var [view, setView]=useState(true)
//     var [T, setT]=useState(0)
//     var [upd, setup]=useState({
//         n: 0, 
//         f: [], 
//         m1: [0, 0, 0], 
//         p: [0], 
//         T: 0, 
//         t: 1, 
//         data: {}, 
//         points: 0})
//     var value={ n, f, m1, p, T, t, data, points,
//         showModal, setShowmodal, showModal1, setShowmodal1, setn, 
//         setf, setm1, setp, sett, setData,
//         setPoints, view, setView, setT, upd, setup
//     }

//     return (
//         <Context.Provider value={value}>
//             {children}
//         </Context.Provider>
//     )

// }
// export const ContextConsumer=({children})=>{
//     return(
//         <Context.Consumer>
//             {context => {
//                 if (context === undefined) {
//                     throw new Error('CountConsumer must be used within a CountProvider')
//                 }
//                 return children(context)
//             }
//             }
//         </Context.Consumer>    
//     )
// }
