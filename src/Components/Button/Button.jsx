import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to, className = '', onClick }) => {
  const combinedClass = `Na-linkbutton${className ? ' ' + className : ''}`;


  return to ? (
    <Link to={to} className={combinedClass} onClick={onClick}>
      {text}
    </Link>
  ) : (
    <button className={combinedClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;