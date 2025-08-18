import Button from "../Button/Button"
import "./TitleUlBtn.css"

const TitleUlBtn = ({title, ul, btn , btnClass}) => {
    return (
        <div className = "Bm-titleUlBtn">
            <h2>{title}</h2>
            <ul>
                {ul.map((item, index) => {
                    return(
                    <li key={index}>
                        <img src="assets/images/briefcase.png" alt="briefcase"/>
                        <p>{item}</p>
                    </li>
                    )
                })}
            </ul>
            <Button text={btn} className = {btnClass}/>
        </div>
    )
}

export default TitleUlBtn
