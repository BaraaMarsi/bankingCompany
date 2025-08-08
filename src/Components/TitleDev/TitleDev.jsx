import "./TitleDev.css"

const TitleDev = ({title, div1, div2}) => {
    return (
        <div  className="titleDev">
            <h1>{title}</h1>
            <div>
                <p>{div1}</p>
                <p>{div2}</p>
            </div>
        </div>
    )
}

export default TitleDev
