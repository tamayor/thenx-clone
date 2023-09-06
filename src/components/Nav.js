import thenxLogo from "../images/thenx-logo.png"
import "./Nav.css"
export default function Nav(){
    return(
        <nav>
            <img src={thenxLogo} alt="thenx logo"/>
            <div>
                <a href="https://thenx.com/upgrade" rel="noreferrer">MEMBERSHIP</a>
                <a href="https://www.youtube.com/channel/UCaBqRxHEMomgFU-AkSfodCw" rel="noreferrer">TRAINERS</a>
                <a href="https://shop.thenx.com/" rel="noreferrer">SHOP</a>
                <a href="https://thenx.com/training" rel="noreferrer">GUIDE</a>
                <a href="https://shop.thenx.com/blogs/news" rel="noreferrer">BLOG</a>
            </div>
        </nav>
    )
};