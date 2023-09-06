import android from '../images/app/android-logo.png'
import apple from '../images/app/apple-logo.png'
import app1 from '../images/app/unnamed.png'
import app2 from '../images/app/unnamed1.png'
import app3 from '../images/app/unnamed2.png'
import app4 from '../images/app/unnamed3.png'
import app5 from '../images/app/unnamed4.png'
import './Page6.css'

import Marquee from "react-fast-marquee";

export default function Page6(){
    const marqueeStyle={
        width: '600px',
        display: 'flex',
    }
    return(
        <section className='app'>
            <div>
                <h3>DOWNLOAD THE THENX APP</h3>
                <h1>From Beginner to Pro, <br/>trusted by 2 million people</h1>
                <div className='app-logos'>
                    <a href="https://apps.apple.com/us/app/thenx/id1192413645" target="_blank" rel="noreferrer noopener">
                        <img src={apple} alt="thenx app" className='thenx-app-store'/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.sysops.thenx&hl=en&pli=1" target="_blank" rel="noreferrer noopener">
                        <img src={android} alt="thenx app" className='thenx-app-store'/>
                    </a>
                </div>
            </div>
            <Marquee className="marquee" loop={0} play={true} style={marqueeStyle} gradient={true} gradientColor={[0, 0, 0]}>
                <img alt='thenx app preview' src={app1}/>
                <img alt='thenx app preview' src={app2}/>
                <img alt='thenx app preview' src={app3}/>
                <img alt='thenx app preview' src={app4}/>
                <img alt='thenx app preview' src={app5}/>

            </Marquee>
        </section>
    )
}