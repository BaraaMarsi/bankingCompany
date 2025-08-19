import Hero from "../../Components/Hero/Hero";
import MissionAndVision from "../../Components/MissionAndVision/MissionAndVision";
import PressReleases from "../../Components/PressReleases/PressReleases";
import PressReleasesData from "../../Data/PressReleasesData"

const About = () => {
    return (
        <>
            <Hero image="assets/images/HeroImage2.webp" 
                textAlt="Hero About Image"
                yourWelcome= "Welcome to YourBank"
                yourTitle = "Where Banking Meets "
                yourTitleSpan= "Excellence"
                yourDesc= "At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."
            />
            <MissionAndVision/>
            <PressReleases/>
        </>
    );
}

export default About;
