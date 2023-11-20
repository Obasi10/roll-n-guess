import React from "react";
import { useCount } from "../context/context";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";
import Variants from "./variants";
import Tr from "./Tr";
import Plot from "react-plotly.js";
import html2pdf from "html2pdf.js"
import Pic from "./pic.jpg"

const Lastpage =({setShowmodal1})=> {
    const {state}=useCount()
    const data=state.raw.data
    const p=state.raw.p
    var Points = [];
    for (let i=1; i<6; i++){
        Points[i-1]=data['Round '+i][4];
    }
    const occur=Points.reduce(function(acc,curr){
        return acc[curr]?++acc[curr] : acc[curr]=1, acc
    },{});

    var G= [];
    for (let i=0; i<4;i++){
        if (occur[i]) {
            G[i]=occur[i]/5;
        } else {G[i]=0};
    }
    const G1=Math.round(10*(G[1]+G[2]+G[3]))/10
    const G2=Math.round(10*(G[2]+G[3]))/10
    const G3=G[3]
    const G0=G[0]
    G[4]=(((p[4]+data['Round 5'][4])/15)*100).toFixed(1)
    const G4=G[4]+'%'
    var remarks
    if (G[4]>75){
        remarks='Your performance is very good.'
    } else if (G[4]<=75 && G[4]>50){
        remarks='Your performance is good.'
    } else if (G[4]<=50 && G[4]>25){
        remarks='Your performance is fair.'
    } else {
        remarks='Your performance is very poor.'
    }

    const x1=[]
    const y1=[]
    for (let i = 0; i < 5; i++) {
        x1[i]= data['Round '+(i+1)][4];
        y1[i]= 'Round '+(i+1)
    }

    const data11=[{
        type: 'bar',
        marker: {
            color: "purple",
        },
        x:x1,
        y:y1,
        orientation: 'h'
    }];
    const layout11={
        title: {
            text: '<span> Game Analysis</span>',
            color: "white"
        },
        xaxis: {
            title: '<span>Points</span>',
            tickmode: 'linear',
            tick0: 0,
            dtick: 1.0,
            gridwidth: 0.4,
            griddash:'dash',
        },
        margin: {
            l: 100,
            r: 20,
            t: 100,
            b:70
        },
        yaxis: {
            title: '<span>Rounds</span>'
        },
        paper_bgcolor:'linear-gradient(to top left, rgb(19, 8, 8) 0%, rgb(24, 17, 17) 16.6%, rgb(61, 54, 54) 33.3%, rgb(102, 99, 99) 50%, rgb(61, 54, 54) 66.6%, rgb(24, 17, 17) 83.3%, rgb(19, 8, 8) 100%)',
        plot_bgcolor: 'linear-gradient(to top left, rgb(19, 8, 8) 0%, rgb(24, 17, 17) 16.6%, rgb(61, 54, 54) 33.3%, rgb(102, 99, 99) 50%, rgb(61, 54, 54) 66.6%, rgb(24, 17, 17) 83.3%, rgb(19, 8, 8) 100%)', 
        font:{
            family: 'Arial',
            color: 'white',
            family: 'Courier New, monospace'
        },

    }
    
    const data12 = [{
        values: [G[4], 100-G[4]],
        labels: ['Accuracy  ', 'Failure'],
        name: 'Guessing accuracy',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie',
        marker: {
            color: 'purple',
        }
    }]
    const layout12 = {
        title: {
            text: '<span> Guessing Accuracy </span>',
        }
    };

    let config={
        responsive: true,
        staticPlot: true,
        scale: 1
    }

    const data13 = [{
        values: [G[3],G[2],G[1],G[0]],
        labels: ['Ist trial', '2nd trial', '3rd trial', 'Total miss '],
        type: 'pie'
    }];
    const layout23 = {
        title: {
            text: '<span> Pie Chart showing performance. </span>',
            color: "white"
        },
        paper_bgcolor:'linear-gradient(to top left, rgb(19, 8, 8) 0%, rgb(24, 17, 17) 16.6%, rgb(61, 54, 54) 33.3%, rgb(102, 99, 99) 50%, rgb(61, 54, 54) 66.6%, rgb(24, 17, 17) 83.3%, rgb(19, 8, 8) 100%)',
        plot_bgcolor: 'linear-gradient(to top left, rgb(19, 8, 8) 0%, rgb(24, 17, 17) 16.6%, rgb(61, 54, 54) 33.3%, rgb(102, 99, 99) 50%, rgb(61, 54, 54) 66.6%, rgb(24, 17, 17) 83.3%, rgb(19, 8, 8) 100%)',
    };

    const element=document.getElementById('pdf');
    const opt={
        margin: 1,
        filename: 'Roll \'n\' Guess.pdf',
        image: {type: 'jpeg', quality:0.98},
        html2canvas: {scale:1},
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'p'
        },
        pagebreak: {
            avoid: ['.table-responsive','#plot_div','#GG', '#appraisal']
        }
    }

    const finish= ()=> {
       html2pdf().from(element).set(opt).toPdf().get('pdf').then(function (pdf) {
            var totalPages = pdf.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                pdf.setPage(i);
                pdf.setFontSize(12);
                pdf.setTextColor(151);
                pdf.text(0.4, pdf.internal.pageSize.getHeight() - 0.5, "ROLL 'n' GUESS | Copyright 2023 | Designer: INNOCENT OBASI");
                pdf.addImage(Pic, 'JPEG', pdf.internal.pageSize.getWidth() - 1.1, pdf.internal.pageSize.getHeight() - 1, 0.65, 0.8);
                pdf.text('Page ' + i + ' of ' + totalPages, pdf.internal.pageSize.getWidth() - 1.4, 0.5);
            } 
        }).save();
        setShowmodal1(true)
    }

    return (
        <motion.div id="main"
            variants={Variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <article className="main4">
                    <div id="pdf" style={{paddingTop: "1.5%"}}>
                        <h1 className="begin">🎲 ROLL 'n' GUESS</h1>
                        <h2 className="begine">Detailed Analysis</h2>
                        <div className="table-responsive">
                            <div className="table-wrapper" style={{minWidth: "220px"}}>
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
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5" id="tot">Total</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td id="total">{p[5]}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <Plot
                            id="plot_div"
                            data={data11}
                            layout={layout11}
                            config={config}
                            style={{textAlign: "center", marginBottom: "5%", marginTop: "5%", alignItems: "center"}}
                        />
                        <div id="GG">
                            <div className="results">
                                <span className="G">Guessing Accuracy</span><span id="G4" className="motion3">{G4}</span>
                            </div>
                            <div className="results">
                                <span className="G">Probability of Accuracy at first trial</span><span id="G3" className="motion3">{G3}</span>
                            </div>
                            <div className="results">
                                <span className="G">Probability of Accuracy at second trial</span><span id="G2" className="motion3">{G2}</span>
                            </div>
                            <div className="results">
                                <span className="G">Probability of Accuracy at third trial</span><span id="G1" className="motion3">{G1}</span>
                            </div>
                            <div className="results">
                                <span className="G">Probability of Failing all attempts</span><span id="G0" className="motion3">{G0}</span>
                            </div>
                            <Plot 
                                data={data13}
                                layout={layout23}
                                config={config}
                                style={{textAlign: "center", alignItems: "center",  marginBottom: "20px", marginTop: "20px"}}
                            />
                        </div>
                        <div id="appraisal">
                            <h4>Game Assessment</h4>
                            <div id="remarks">{remarks}</div>
                            <Plot 
                                data={data12}
                                layout={layout12}
                                config={config}
                                style={{textAlign: "center", marginBottom: "20px", marginTop: "20px", alignItems: "center"}}
                            />
                        </div>
                    </div>
                    <div className="exitview">
                        <div className="trial">
                            <Link to="/" style={{textDecoration: "none"}}><button className="btn2 exit" ><span className="x">x</span><span>Exit game</span></button></Link>
                        </div>
                        <div className="trial-rem">
                            <motion.button className="btn2 exit p-2 motion3"
                                variants={Variants}
                                whileHover="hover"
                                onClick={()=>finish()}
                                
                            ><i className="bi bi-download"> Download Pdf</i></motion.button>
                        </div>
                    </div>
            </article>
        </motion.div>
    )
}

export default Lastpage