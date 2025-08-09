import "./Section.css"
const Section = ({welcome, title, titleSpan, secTitle, desc, reverse, flex, imageUrl, imageAlt, testName}) => {
    return (
        <div className="MA-title">
            <div className={`${reverse?'reverse':''} ${flex?'flex':''}`}>
                {imageUrl && (<img src={imageUrl} alt={imageAlt}  />)}
                <h1>
                    
                    {welcome && <p className="welcome">{welcome}</p>}
                    {title && <>{title}</>}
                    {titleSpan && <span>{titleSpan}</span>}
                    {secTitle && <>{secTitle}</>}
                </h1>
            </div>
            <div>
                {desc && <p className="desc">{desc}</p>}
                {testName && <h1 className="testName">{testName}</h1>}
            </div>
        </div>
    );
}

export default Section;

