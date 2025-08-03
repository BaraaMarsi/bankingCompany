import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = ({image, links, contacts, socials, copyRights, terms}) => {
    return (
        <footer>
            <div className="MA-container">
                <img className="MA-logo" src={image} alt="bank logo" />
            <ul>
                {links.map((link, index) => {
                    return(
                        <li key={index}><Link to={link.url}>{link.content}</Link></li>
                    )
                })}
            </ul>
            <div className="MA-contanct">
                {contacts.map((contact, index) => {
                    return(
                        <a href={contact.call} key={index} target="_blank">
                            <img src={contact.img} alt={contact.alt}/>
                            <span>{contact.text}</span>
                        </a>
                    )
                })}
            </div>
            <div className="MA-bottom">
                <div className="MA-socail">
                    {socials.map((social, index) => {
                        return(
                            <div key={index}>
                                <img src={social.img} alt={social.alt}/>
                            </div>
                        )
                    })}
                </div>
                <p className="MA-rights">{copyRights}</p>
                <div className="MA-terms">
                    {terms.map((term, index) => {
                        return(
                            <p key={index}>{term.content}</p>
                        )
                    })}
                </div>
            </div> 
            </div>
        </footer>
    );
}

export default Footer;
