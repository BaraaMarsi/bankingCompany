import Section from "../Section/Section";
import "./Hero.css"
const Hero = ({image, textAlt,yourWelcome, yourTitle, yourTitleSpan, yourSecTitle, yourDesc}) => {
    return (
        <div className="container padding_Buttom">
            <div className="MA-hero">
                <Section 
                    welcome= {yourWelcome}
                    title= {yourTitle}
                    titleSpan= {yourTitleSpan}
                    secTitle= {yourSecTitle}
                    desc= {yourDesc}
                />
                <img src={image} alt={textAlt}/>
            </div>
        </div>
    );
}

export default Hero;
