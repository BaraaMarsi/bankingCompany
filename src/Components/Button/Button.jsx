import { Link } from 'react-router-dom';
import './Button.css'
const Button = ({text , to}) => {
    return (
        <div>
            <Link to = {to} className="Na-linkbutton">
                {text}
            </Link>
        </div>
    );
}

export default  Button;
