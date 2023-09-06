import logo from '../images/thenx-logo.png'
import fb from '../images/footer/facebook-app-symbol.png'
import ig from '../images/footer/instagram.png'
import x from '../images/footer/twitter.png'
import yt from '../images/footer/youtube.png'

import './Footer.css'
export default function Footer(){
    return(
        <footer  className='footer-container'>
            <div className='footer-1'>
                <span>STAY CONNECTED WITH US</span>
                <div>
                    <a href='https://www.facebook.com/OfficialTHENX' target='_blank' rel='noreferrer noopener'><img alt='social media logo' src={fb} className='fb'/></a>
                    <a href='https://www.instagram.com/thenx/' target='_blank' rel='noreferrer noopener'><img alt='social media logo' src={ig} className='ig'/></a>
                    <a href='https://twitter.com/officialthenx' target='_blank' rel='noreferrer noopener'><img alt='social media logo' src={x} className='x'/></a>
                    <a href='https://www.youtube.com/user/TheMiamiTrainer' target='_blank' rel='noreferrer noopener'><img alt='social media logo' src={yt} className='yt'/></a>
                </div>
            </div>
            <div className='footer-2'>
                <img src={logo} alt='thenx logo' className='thenx-logo' />
                <div>
                    <h3>ABOUT</h3>
                    <span>Our Blog</span>
                    <span>Press</span>
                </div>
                <div>
                    <h3>TEAMS</h3>
                    <span>My Account</span>
                    <span>Payment</span>
                </div>
                <div>
                    <h3>OTHERS</h3>
                    <span>Support</span>
                    <span>Tutorial</span>
                </div>
                <div>
                    <h3>COMPANY</h3>
                    <span>Contact</span>
                    <span>Shop</span>
                </div>
            </div>
            <p className='footer-copyright'>Copyright © THENX Clone 2023</p>
        </footer>
    )
}