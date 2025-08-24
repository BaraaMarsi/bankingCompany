import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ text, to, className, onClick, isActive }) => {
  const combinedClass =` Na-linkbutton ${className} ${isActive ? 'active-button' : ''}`;

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