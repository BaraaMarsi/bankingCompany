import "./Section.css"
const Section = ({welcome, welcomeImage, title, titleSpan, secTitle, desc, reverse, flex, imageUrl, imageAlt, testName}) => {
    return (
        <div className="MA-title card">
            <div className="welcome">
                {welcomeImage && <img src={welcomeImage} alt="icon"/>}
                {welcome && <p>{welcome}</p>}
            </div>
            <div className={`${reverse ||''} ${flex ||''}`}>
                {(imageUrl || imageAlt) && (<img src={imageUrl} alt={imageAlt}  />)}
                <h1>
                    {title}
                    {titleSpan && <span>{titleSpan}</span>}
                    {secTitle}
                </h1>
            </div>
            {desc && <p className="desc">{desc}</p>}
            {testName && <h2 className="testName">{testName}</h2>}
        </div>
    );
}

export default Section;

