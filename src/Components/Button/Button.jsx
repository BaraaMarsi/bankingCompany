import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to, className }) => {
  const combinedClass = `Na-linkbutton${className ? ' ' + className : ''}`;

  return (
    <div>
      <Link to={to} className={combinedClass}>
        {text}
      </Link>
    </div>
  );
};

export default Button;