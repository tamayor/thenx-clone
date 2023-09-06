import thenxCanada from '../images/reviews/Thenx-Workshop-29-of-115.jpg'
import playButton from '../images/reviews/play-button.png'
import threeStars from '../images/reviews/3-stars.png'
import fourStars from '../images/reviews/4-stars.png'
import fiveStars from '../images/reviews/5-stars.png'

import '../components/Page5.css';
export default function Page5(){
    const reviews = [
        {
          summary: "Top-Notch Training",
          stars: 5,
          review: "Outstanding personal trainer! Their expertise and dedication have transformed my fitness journey.",
          commenter: "Elena Rodriguez",
          commenter_work: "Marketing Manager"
        },
        {
          summary: "Life-Changing Experience",
          stars: 5,
          review: "I can't express how much my life has improved thanks to their guidance. Highly recommend!",
          commenter: "David Thompson",
          commenter_work: "Financial Analyst"
        },
        {
          summary: "Results Speak Louder",
          stars: 4,
          review: "Great experience overall. Achieved remarkable results and felt supported throughout.",
          commenter: "Sarah Adams",
          commenter_work: "Teacher"
        },
        {
          summary: "Dedicated Trainer",
          stars: 5,
          review: "A dedicated and motivating trainer who goes the extra mile to ensure success. Truly impressed.",
          commenter: "James Smith",
          commenter_work: "Engineer"
        },
        {
          summary: "Expert Guidance",
          stars: 4,
          review: "Their expertise in fitness is unquestionable. I've learned so much and seen fantastic progress.",
          commenter: "Emily Lewis",
          commenter_work: "Graphic Designer"
        },
        {
          summary: "Exceptional Service",
          stars: 5,
          review: "The service provided is exceptional. I've achieved my fitness goals faster than I ever thought possible.",
          commenter: "Sophia Martinez",
          commenter_work: "Healthcare Professional"
        },
        {
          summary: "Motivating Coach",
          stars: 4,
          review: "My coach's motivation is contagious. They keep me inspired and on track to reach my fitness milestones.",
          commenter: "Daniel Lee",
          commenter_work: "Software Developer"
        },
        {
          summary: "Friendly Atmosphere",
          stars: 5,
          review: "The gym has a friendly and welcoming atmosphere. It's a joy to work out here.",
          commenter: "Olivia White",
          commenter_work: "Student"
        },
        {
          summary: "Transformative Journey",
          stars: 5,
          review: "I've undergone a transformative fitness journey thanks to their guidance and support. Highly recommended.",
          commenter: "Michael Brown",
          commenter_work: "Business Owner"
        },
        {
          summary: "Consistent Progress",
          stars: 4,
          review: "I've seen consistent progress since I started training with them. Their expertise is evident.",
          commenter: "Laura Davis",
          commenter_work: "Writer"
        }
      ];
      
    const rev = reviews.map(items=>{
        return(
            <div  className='review-card'>
                    <div className='review-up'>
                        <h3 className='review-summary'>{items.summary}</h3>
                        {items.stars === 3 && <img className='review-stars' src={threeStars} alt='stars'/>}
                        {items.stars === 4 && <img className='review-stars' src={fourStars} alt='stars'/>}
                        {items.stars === 5 && <img className='review-stars' src={fiveStars} alt='stars'/>}
                    </div>
                    <p className='review-review'>{items.review}</p>
                    <div  className='review-down'>
                        <h4 className='review-commenter'>{items.commenter}</h4>
                        <h5 className='review-commenterWork'>{items.commenter_work}</h5>
                    </div>
            </div>
        )
    })

    return(
        <section className='review-container'>
            <div className='review-nav'>
                <h1 className='review-title'>REVIEWS ABOUT<br/> OUR SERVICE</h1>
                <img className='thenx-canada' src={thenxCanada} alt='thenx canada'/>
                <span className='review-subtitle'>BEST EQUIPMENT FACILITY, <br/>TRAINER, MANAGEMENT AND <br/>KNOWLEDGEABLE STAFF WITH US.</span>
                <a href='https://www.youtube.com/watch?v=fOnTK-8-r7M&ab_channel=THENX' target='_blank' rel='noreferrer noopener'><img className='play-button' src={playButton} alt='play button'/></a>
                <span className='review-tutorial'>Watch Tutorials</span>
            </div>
            <div className='review-cards'>
                {rev}
            </div>
        </section>
    )
}