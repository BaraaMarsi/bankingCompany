import { useState } from "react";
import OurFeaturesData from "../../Data/OurFeaturesData"
import Card from "../Card/Card"
import "./OurFeatures.css"


const OurFeatures = () => {
    const [selectedType, setSelectedType] = useState("online_Banking");
    return (
        <section className="our_features container padding_Buttom">
                <Card section={{
                    title: "Our ",
                    titleSpan: "Features",
                    desc: "Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
                }}
                    customClass="first_card" />
                <div className="container0">
                    <div className="filtters">
                        <div onClick={() => setSelectedType("online_Banking")}>
                            <Card
                                customClass={selectedType == "online_Banking" ? "active btn1" : "btn1"}
                                titleDev={{ div1: "Online Banking" }}
                            />
                        </div>
                        <div onClick={() => setSelectedType("financial_Tools")}>
                            <Card
                                customClass={selectedType == "financial_Tools" ? "active btn2" : "btn2"}
                                titleDev={{ div1: "Financial Tools" }}
                            />
                        </div>
                        <div onClick={() => setSelectedType("customer_Support")}>
                            <Card
                                customClass={selectedType == "customer_Support" ? "active btn3" : "btn3"}
                                titleDev={{ div1: "Customer Support" }}
                            />
                        </div>
                    </div>
                    <div className="cards">
                        {OurFeaturesData.filter((data) => data.type == selectedType).map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: "arrow.png",
                                    imageAlt: "arrow",
                                    flex: "flex",
                                    reverse: "reverse",
                                    title: data.title,
                                    desc: data.desc
                                }}
                                customClass="features_card" />))}
                    </div>
                </div>
        </section>
    )
}

export default OurFeatures
