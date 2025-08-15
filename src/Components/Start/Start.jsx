import Button from '../Button/Button.jsx';
import Section from '../Section/Section.jsx'; 
import './Start.css';

const Start = ({ title, titlespan, description, buttonText, buttonTo, buttonClass }) => {
  return (
    <div className="Na-container container padding_Buttom">
      <div className="Na-start-section">
        <div className="Na-start-left">
          <Section
            title={title}
            titleSpan={titlespan}
            desc={description}     
          />
        </div>
        <div className="Na-start-right">
          <Button text={buttonText} to={buttonTo} className={buttonClass} />
        </div>
      </div>
    </div>
  );
};

export default Start;