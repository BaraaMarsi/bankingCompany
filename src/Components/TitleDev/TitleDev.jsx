import "./TitleDev.css"

const TitleDev = ({title, div1, div2}) => {
    return (
        <div  className = "Bm-titleDev">
            {title && <h2>{title}</h2>}
            <div className = "divs">
                {div1 && <p>{div1}</p>}
                {div2 && <p>{div2}</p>}
            </div>
        </div>
    )
}

export default TitleDev
