import React from "react";
import "./Home.css";
import banner1 from "../../Images/banner1.png"
import Product from "../Product/Product";
import img_1 from "../../Images/product2.png"
import img_2 from "../../Images/product3.png"
import img from "../../Images/product1.png"

function Home() {
    return <div className={"home"}>
        <div className={"home-container"}>
            <img className={"home-banner"} src={banner1} alt={""}/>
            <div className={"home-row"}>
                <Product id={"123"}
                         title={"The lean startup Inch (68.58 cm) Led 1920 x 1080 Pixels Led 1920 x 1080 Pixels Fhd Eye-Care,"}
                         price={"29.9"}
                         image={img}
                         rating={3}/>
                <Product
                    id={"12345"}
                    title={"BenQ Gw2780 27 Inch (68.58 cm) Led 1920 x 1080 Pixels Fhd Eye-Care, IPS Monitor"}
                    price={"199.9"}
                    image={img_1}
                    rating={1}/>
            </div>
            <div className={"home-row"}>
                <Product
                    id={"2234"}
                    title={"BenQ Gw2780 27 Inch (68.58 cm) Led 1920 x 1080 Pixels Fhd Eye-Care, IPS Monitor"}
                    price={"199.9"}
                    image={img_1}
                    rating={3}/>
                <Product
                    id={"34445"}
                    title={"JB Super Bass Portable Wireless Bluetooth Speaker with inbuilt"}
                    price={"199.9"}
                    image={img_2}
                    rating={4}/>
                <Product
                    id={"44343"}
                    title={"BenQ Gw2780 27 Inch (68.58 cm) Led 1920 x 1080 Pixels Fhd Eye-Care, IPS Monitor"}
                    price={"199.9"}
                    image={img_1}
                    rating={5}/>
            </div>
            <div className={"home-row"}>
                <Product
                    id={"524234"}
                    title={"BenQ Gw2780 27 Inch (68.58 cm) Led 1920 x 1080 Pixels Fhd Eye-Care, IPS Monitor"}
                    price={"199.9"}
                    image={img_1}
                    rating={3}/>
                <Product
                    id={"6897879"}
                    title={"BenQ Gw2780 27 Inch (68.58 cm) Led 1920 x 1080 Pixels Fhd Eye-Care, IPS Monitor"}
                    price={"199.9"}
                    image={img_1}
                    rating={5}/>
            </div>
        </div>
    </div>
}

export default Home
