import MissionAndVisionData from "./../../Data/MissionAndVisionData"
import Section from "../Section/Section"
import "./MissionAndVision.css"

const MissionAndVision = () => {
    const missionData = JSON.parse(localStorage.getItem("mission & vision data"))
    return (
        <section className="MA-missionAndVision container padding_Buttom">
            <Section title="Mission & Vision"
                    desc="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
            />
            <div className="MA-cards">
                {missionData.map((card, index) => {
                return(
                    <div className="MA-card" key={index}>
                        <div className="MA-img">
                            <img src={card.imageUrl} alt="image about mission&vision"/>
                        </div>
                        <Section 
                            title={card.title} desc={card.desc}
                        />
                    </div>
                    
                )
            })}
            </div>
        </section>
    )
}

export default MissionAndVision
