import React, { useState } from "react"
import "./Page2.css"
import arrow from '../images/left-arrow.png'
import chrisImg from "../images/ChrisVestFinal-5_2048x2048 copy.png"

export default function Page2() {
    const QA = [
        {
            id: 0,
            question: "HOW A PERSONAL TRAINER COULD HELP?",
            answer: "A personal trainer can help individuals achieve their fitness goals by providing personalized workouts, expert guidance, and motivation.",
        },
        {
            id: 1,
            question: "HOW DOES HAVING A PERSONAL TRAINER DIFFER FROM WORKING OUT INDEPENDENTLY?",
            answer: "Having a personal trainer offers personalized support, accountability, and expertise that can lead to more effective workouts, faster progress, and a higher likelihood of reaching fitness goals compared to working out independently.",
        },
        {
            id: 2,
            question: "WHAT ADDITIONAL BENEFITS CAN A PERSONAL TRAINER OFFER BESIDES WORKOUT GUIDANCE?",
            answer: "In addition to workouts, personal trainers often provide valuable nutritional advice, accountability, and motivation to help clients stay on track with their fitness journey. They also offer guidance on proper exercise form, injury prevention, and adjustments to the workout plan as the client progresses.",
        },
    ];

    const [revealAnswers, setRevealAnswers] = useState(QA.map(() => false));

    function handleShowAnswer(id) {
        setRevealAnswers(prevVal => {
            const updatedValues = [...prevVal];
            updatedValues[id] = !updatedValues[id];
            return updatedValues;
        });
    }

    const qa = QA.map((item) => {
        return (
            <div key={item.id}>
                <div className="pg-2-q-container">
                    <img className={revealAnswers[item.id] ? "pg-2-arrow-up" : "pg-2-arrow-down"} src={arrow} alt="arrow" onClick={() => handleShowAnswer(item.id)} />
                    <h4 className="pg-2-question">{item.question}</h4>
                </div>
                <div className={revealAnswers[item.id] ? "pg-2-answer-reveal" : "pg-2-answer-hide"}>
                    <p>{item.answer}</p>
                </div>
            </div>
        )
    })

    return (
        <section className="pg-2-container">
            <img className="pg-2-img" src={chrisImg} alt="chris heria" />
            <div className="pg-2-all">
                <h1 className="pg-2-tagline">YOUR FITNESS IS <em>YOUR ULTIMATE FASHION</em></h1>
                <div className="pg-2-qa"> 
                    {qa}
                </div>
                <a href="https://thenx.com/programs"><button className="get-started">GET STARTED</button></a>
            </div>
        </section>
    );
}
