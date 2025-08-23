import OurJobData from './../../Data/OurJobData';
import TitleDev from '../../Components/TitleDev/TitleDev';
import TitleUlBtn from '../../Components/TitleUlBtn/TitleUlBtn.jsx';
import './JobOpenings.css';
import Section from "../../Components/Section/Section.jsx";

const JobOpenings = () => {
    return(
         <div className="job container padding_Buttom">
                <div className="jobHead">
                < Section
                    titleSpan={"Job Openings"}
                    desc={"Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry"}
                /></div>
            <div className="career-section">
            {OurJobData.map((job) => (
                <div key={job.id} className="career-card">
                <TitleDev
                   title={job.title}
                    div1={`Location: ${job.location}`}
                    div2={`Department: ${job.department}`}
                />

                <Section
                    title="About This Job"
                    desc={job.description}
                />

                <TitleUlBtn
                title="Requirements & Qualifications"
                ul={job.requirements} 
                 btn={job.buttonText} 
                 btnClass={"Na-applynow"}/>
                </div>
            ))}
            </div>
            </div>

    )
}
export default JobOpenings