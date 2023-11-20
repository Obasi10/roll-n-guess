import React from "react";
import { useCount } from "../context/context";

const Tr =(props)=>{
    const {state}=useCount()
    const data=state.raw.data
    const i=props.mk

    return(
        <>
            {data['Round '+i] && (
                <>
                    <td>{'Round '+i}</td>
                    <td>{data['Round '+i][0]}</td>
                    <td>{data['Round '+i][1]}</td>
                    <td>{data['Round '+i][2]}</td>
                    <td>{data['Round '+i][3]}</td>
                    <td>{data['Round '+i][4]}</td>
                </>
            )}
        </>
    )
}

export default Tr