import Section from "../../Components/Section/Section";
import Card from "../../Components/Card/Card";
import ProductsData from "../../Data/ProductsData";
import { useState } from "react";
import Button from "../../Components/Button/Button";
import "./OurProducts.css";

const OurProducts = () => {
    const [productType, setproductType] = useState('individual');
    return (

        <section className="our_products container padding_Buttom">
            <div className="BL-products-head">
                <Section title={"Our "} titleSpan={"Products"} desc={"Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations"} />
                <div className="BL-products-buttons">
                    <Button
                        text={"For Individuals"}
                        className={`Na-forindividuals ${productType === 'individual' ? 'active-button' : ''}`}
                        onClick={() => setproductType('individual')}
                    />
                    <Button
                        text={"For Businesses"}
                        className={`Na-forbusinesses ${productType === 'business' ? 'active-button' : ''}`}
                        onClick={() => setproductType('business')}
                    />
                </div>
            </div>
            <div className="BL-products-container">
                {ProductsData
                    .filter((product) => product.type === productType)
                    .map((product, index) => (
                        <Card
                            key={index}
                            section={{
                                title: product.title,
                                desc: product.description,
                                imageUrl: product.icon,
                                imageAlt: `Icon for ${product.title}`,
                                flex: 'flex'
                            }}
                            customClass="BL-product-card"
                        />
                    ))}
            </div>
        </section>

    );
}

export default OurProducts;