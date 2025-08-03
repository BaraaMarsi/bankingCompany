import Button from '../Button/Button.jsx';
import './Start.css';

const Start = ({ title,titlespan, description, buttonText, buttonTo }) => {
  return (
    <div className="Na-container container">
      <div className="Na-start-section">
        <div className="Na-start-left">
          <h2>{title}
            <span className="Na-highlight">{titlespan}</span>
          </h2>
          <p>{description}</p>
        </div>
        <div className="Na-start-right">
          <Button text={buttonText} to={buttonTo} />
        </div>
      </div>
    </div>
  );
};

export default Start;
