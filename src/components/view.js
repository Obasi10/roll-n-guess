import React from "react";
import Tr from "./Tr";
import { Link } from "react-router-dom";

const View=()=> {

    return (
        <div id="main">
            <article className="main3">
                <h1 className="begin">🎲 ROLL 'n' GUESS</h1>
                <h3 id="round-new"> Game Status</h3>
                <div className="table-responsive stytab">
                    <div className="table-wrapp">
                        <table>
                            <thead>
                                <tr>
                                    <th>Round</th>
                                    <th>Guess 1</th>
                                    <th>Guess 2</th>
                                    <th>Guess 3</th>
                                    <th>True value</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><Tr mk={1}/></tr>
                                <tr><Tr mk={2}/></tr>
                                <tr><Tr mk={3}/></tr>
                                <tr><Tr mk={4}/></tr>
                                <tr><Tr mk={5}/></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="exitvi">
                    <div className="trial">
                        <Link to="/" style={{textDecoration: "none"}}><button className="btn2 exit vie"><span className="x">x</span><span>Exit game</span></button></Link>
                    </div>
                    <div className="trial-rem extra">
                        <Link to="/play"><button className="btn2 return px-2 vie motion3"><span className="x">&#9658;</span><span>Return</span></button></Link>
                    </div>
                </div>        
            </article>
        </div>
    )
}

export default View