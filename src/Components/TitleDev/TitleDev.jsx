import "./TitleDev.css"

const TitleDev = ({title, div1, div2}) => {
    return (
        <div  className = "Bm-titleDev">
            <h1>{title}</h1>
            <div className = "divs">
                <p>{div1}</p>
                <p>{div2}</p>
            </div>
        </div>
    )
}

export default TitleDev
