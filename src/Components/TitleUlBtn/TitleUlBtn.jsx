import Button from "../Button/Button"
import "./TitleUlBtn.css"

const TitleUlBtn = ({title, ul, btn}) => {
    return (
        <div className = "titleUlBtn">
            <h1>{title}</h1>
            <ul>
                {ul.map((item, index) => {
                    return(
                    <li key={index}>
                        <img src="/assets/images/briefcase.png" alt="briefcase"/>
                        <p>{item}</p>
                    </li>
                    )
                })}
            </ul>
            <Button text={btn}/>
        </div>
    )
}

export default TitleUlBtn
