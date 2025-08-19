import PressReleasesData from "../../Data/PressReleasesData"
import Section from "../Section/Section"
import TitleDev from "../TitleDev/TitleDev"
import "./PressReleases.css"

const PressReleases = () => {
    const dataCards = JSON.parse(localStorage.getItem("press releases data"))
    return (
        <section className="MA-preesReleases container padding_Buttom">
            <Section title="Press Releases" desc="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."/>
            <div className="MA-cards">
                {dataCards.map((dataCard, index) => {
                    return(
                        <div className="MA-card" key={index}>
                            <img className="MA-img" src={dataCard.image}/>
                            <TitleDev title={dataCard.title} div1={dataCard.location} div2={dataCard.date}/>
                            <p className="description">{dataCard.desc}</p> 
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PressReleases
