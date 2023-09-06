import React from "react";

import arrowReg from '../images/breadcrumb.png'
import chrisImg from "../images/63ada711e1893779ba209215_iAvDJ3EkgPAkaiJXdjh5uCnwgzQ2EpHV9_GZCEEIT44.png"
import "./Page1.css"
export default function Page1(){
    const [startTraining, setStartTraining] = React.useState(false);
    return(
        <main>
            <h1 className="tagline">UNLEASH THE SHAPE OF YOU</h1>
            <a href="https://thenx.com/upgrade">
            <div className="register-now-container" onMouseEnter={()=>setStartTraining(true)} onMouseLeave={()=>setStartTraining(false)}>
                <h3 className={startTraining ? "register-now-hover" : "register-now"}>START TRAINING</h3>
                <img src={arrowReg} alt="arrow" className={startTraining ? "start-training-arrow-hover":"start-training-arrow"}/>
                <p className={startTraining ? "register-now-sub-hover" : "register-now-sub"}>FOR EVERY LEVEL</p>
            </div>
            </a>
            <img className="main-chris-img" src={chrisImg} alt="chris heria" />
            <span className="main-chris-img-caption">CHRIS HERIA | THENX FOUNDER</span>
            <h1 className="thenx-banner">THENX</h1>
            <h1 className="thenx-banner-2">THENX</h1>
            <h1 className="thenx-banner-3">THENX</h1>
        </main>
    )
}