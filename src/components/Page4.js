import img1 from "../images/products/pexels-pavel-danilyuk-7055761.jpg"
import img2 from "../images/products/pexels-ivan-samkov-4164644.jpg"
import img3 from "../images/products/pexels-polina-tankilevitch-6516209.jpg";
import img4 from "../images/products/7ed06bccc51a50da91767c242af4c87e.jpg"
import img5 from "../images/products/pexels-cottonbro-studio-7672104.jpg"
import Marquee from "react-fast-marquee";
import "./Page4.css"
export default function Page4(){
    const items = [
        {
            img:img1,
            name:"Yoga Mat and Blocks",
        },
        {
            img:img2,
            name:"Rings",
        },
        {
            img:img3,
            name:"Resistance Bands",
        },
        {
            img:img4,
            name:"Weight Vests",
        },
        {
            img:img5,
            name:"Pull Up Bar",
        },
    ]
    const itemScroll = items.map(item=>{
        return(
            <div className="products">
                <img className="products--img" src={item.img} alt="products"/>
                <h3 className="products--title">{item.name}</h3>
            </div>
        )
    })
    const marqueeStyle={
        width: '1000px',
    }
    return(
        <section className="products-container">
            <div className="shop-container">
                <h2 className="products-container-title"><strong>LEVEL UP</strong><br/> YOUR WORKOUTS WITH <br/><i>HIGH QUALITY EQUIPMENTS</i></h2>
                <button className="shop-now"><a href="https://shop.thenx.com/" target="_blank" rel="noreferrer noopener">SHOP NOW</a></button>
            </div>
            <Marquee className="marquee" loop={0} play={true} style={marqueeStyle} gradient={true} gradientColor={[0, 0, 0]}>
                {itemScroll}
            </Marquee>
        </section>
    )
}