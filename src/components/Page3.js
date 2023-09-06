import img1 from '../images/article-img/pexels-scott-webb-136404.jpg';
import img2 from '../images/article-img/pexels-pixabay-39308.jpg';
import img3 from '../images/article-img/pexels-philip-ackermann-878151.jpg';
import img4 from '../images/article-img/pexels-agnesska-18061309.jpg';
import img5 from '../images/article-img/pexels-nick-wehrli-5345858.jpg';
import img6 from '../images/article-img/pexels-editor-belal-3150250.jpg';
import img7 from '../images/article-img/pexels-leon-ardho-1552249.jpg';
import img8 from '../images/article-img/pexels-marcus-aurelius-6787162.jpg';
import img9 from '../images/article-img/pexels-barbara-olsen-7869555.jpg';
import img10 from '../images/article-img/pexels-leon-ardho-1552248.jpg';
import arrowArticles from '../images/left-arrow.png';

import React from 'react';
import "./Page3.css"
export default function Page3(){
    const containerRef = React.useRef(null);
    const scrollLeft =()=>{
        if(containerRef.current){
            containerRef.current.scrollLeft -= 400
            
        }
    }
    const scrollRight =()=>{
        if(containerRef.current){
            containerRef.current.scrollLeft += 400
        }
    }

    const article =[
        {
            img:img1,
            title:"Sweat It Out:",
            subtitle: "Unleash Your Inner Beast at the Gym",
            link:"https://www.healthline.com/health/sweating-working-out"
        },
        {
            img:img2,
            title:"Rise and Shine:",
            subtitle: "Morning Workouts for a Healthier You",
            link:"https://www.healthline.com/health/healthy-morning-routine"
        },
        {
            img:img3,
            title:"The Power of Positivity:",
            subtitle: "Boosting Workout Motivation",
            link:"https://www.healthline.com/health/exercise-fitness/how-to-motivate-yourself-to-workout"
        },
        {
            img:img4,
            title:"Healthy Eating Hacks:",
            subtitle: "Fueling Your Workout",
            link:"https://www.healthline.com/health/fitness-exercise-eating-healthy"
        },
        {
            img:img5,
            title:"Mindful Movement:",
            subtitle: "Yoga for Inner Peace",
            link:"https://www.healthline.com/health/mind-body/what-is-mindfulness"
        },
        {
            img:img6,
            title:"Breaking News:",
            subtitle: "Latest Fitness Trends You Should Know",
            link:"https://www.healthline.com/health-news/new-fitness-trends-exercise-052914"
        },
        {
            img:img7,
            title:"Strength in Simplicity:",
            subtitle: "Minimalist Workouts That Work",
            link:"https://www.healthline.com/health/exercise-fitness/strength-training-at-home"
        },
        {
            img:img8,
            title:"Healthy Aging:",
            subtitle: "Staying Fit as You Grow Older",
            link:"https://www.healthline.com/program/healthy-aging#:~:text=Weight%20lifting%20and%20stretching%20are,specific%20benefits%20for%20older%20adults.&text=Staying%20physically%20active%20is%20important,your%20balance%20and%20bone%20mass."
        },
        {
            img:img9,
            title:"Exercise and Mental Health:",
            subtitle: "A Winning Combination",
            link:"https://www.healthline.com/health/depression/exercise"
        },
        {
            img:img10,
            title:"Wellness Wisdom:",
            subtitle: "Learning from the Pros",
            link:"https://www.healthline.com/"
        },
    ]
    const art = article.map((item,index)=>{
        return(
            <div className='article'>
                <a href={item.link} target='_blank' rel='noopener noreferrer'>
                    <img className='article-img' src={item.img} alt='article img'/> </a>
                    <h3>{item.title}</h3><br/>
                    <h4>{item.subtitle}</h4>
               
            </div>
        )
    })
    return(
        <section className='article--container'>
            <h3 className='article-title'><strong>BOOST</strong> YOUR WORKOUT WITH</h3>
            <div className="article-container-scroll">
                <img onClick={scrollLeft} className='article-arrow-left' src={arrowArticles} alt='button left'/>
                <div className='articles' ref={containerRef}>       
                    {art}
                </div>
                <img onClick={scrollRight} className='article-arrow-right' src={arrowArticles} alt='button right'/>
            </div>
        </section>

    )
}