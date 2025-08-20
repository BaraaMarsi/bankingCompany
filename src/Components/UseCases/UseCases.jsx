import UseCasesData from "../../Data/UseCasesData"
import Card from "../Card/Card"
import TitleDev from "../TitleDev/TitleDev"
import "./UseCases.css"

const UseCases = () => {
    return (
        <section className="use_cases container padding_Buttom">
                <Card section={{
                    titleSpan: "Use Cases",
                    desc: "At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
                }} />
                <div>
                    <div className="container0">
                        <div className="container1">
                            {UseCasesData.filter((data) => data.type == "block1").map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: data.imageUrl,
                                    imageAlt: data.imageAlt,
                                    title: data.title,
                                }}/>))}
                        </div>
                        <div className="container2">
                            <Card
                                section={{
                                    title: "For Individuals",
                                    desc: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
                                }}
                                customClass="container2_firstDiv" />
                            <div className="container2_secondDiv">
                                {UseCasesData.filter((data) => data.type == "block2").map((data, index) => (
                                <Card
                                    key= { index }
                                    section={{
                                        titleSpan: data.title,
                                        desc: data.desc,
                                    }}
                                    customClass={data.customClass}
                                    />))}
                            </div>
                            <TitleDev div1="Learn More" />
                        </div>
                    </div>
                    <div className="container0 flex_reverse">
                        <div className="container2">
                            <Card section={{
                                title: "For Business",
                                desc: " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them"
                            }}
                                customClass="container2_firstDiv" />
                            <div className="container2_secondDiv">
                                {UseCasesData.filter((data) => data.type == "block3").map((data, index) => (
                                <Card
                                    key= { index }
                                    section={{
                                        titleSpan: data.title,
                                        desc: data.desc,
                                    }}
                                    customClass={data.customClass}
                                    />))}
                            </div>
                            <TitleDev
                                div1="Learn More" />
                        </div>
                        <div className="container1">
                            {UseCasesData.filter((data) => data.type == "block4").map((data, index) => (
                            <Card
                                key= { index }
                                section={{
                                    imageUrl: data.imageUrl,
                                    imageAlt: data.imageAlt,
                                    title: data.title,
                                }}/>))}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default UseCases
