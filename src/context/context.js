import * as React from 'react';

export const CountContext = React.createContext()

export const countReducer=(state, action)=> {
  switch (action.type) {
    case 'save': {
        return { raw: action.payload,
        }
    }
    default: {
        throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}


export const UserProvider=({children})=> {
    const payload0={
        n: [0],
        T: [0],
        f:[],
        m1: [0,0,0],
        p: [0],
        t:[1],
        points: [0],
        data: {},
        modal: [false, false]
    }
    const [state, dispatch] = React.useReducer(countReducer, { raw: payload0})
    return <CountContext.Provider value={{state, dispatch}}>{children}</CountContext.Provider>
}

export const useCount=()=> {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a Provider')
  }
  return context
}




