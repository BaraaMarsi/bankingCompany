import './Form.css';
import Button from '../Button/Button';
const Form = ({ isRegister, title, description }) => {
    return (
        <div className="BL-formContainer">
            <div className='BL-formHeader'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <form className="BL-form">
                <div className='BL-formInput'>
                    {isRegister &&
                        <div className="BL-nameInput">
                            <input type="text" placeholder="Enter First Name" />
                            <input type="text" placeholder="Enter Last Name" />
                        </div>
                    }
                    <div className="BL-emailInput">
                        <input type="email" placeholder="Enter Your Email" />
                        <div className="BL-passwordInput">
                            <input type="password" id="password" placeholder="Enter your Password" />
                            <img src="./FormIcons/password.svg" alt="eye" className="BL-passwordIcon" />
                        </div>
                    </div>
                </div>
                <div className='BL-buttonGroup'>
                    <Button text={'SignUp'} to={'/signup'} />
                    <Button text={'Login'} to={'/login'} />
                </div>
            </form>
            <div className="BL-separator">
                <img src='./FormIcons/line.svg' alt="line" />
                <span>Or Continue with</span>
                <img src='./FormIcons/line.svg' alt="line" />
            </div>
            <div className="BL-social">
                <div className="BL-icon"><img src="./FormIcons/gmail.svg" alt="gmail" /></div>
                <div className="BL-icon"><img src="./FormIcons/facebook.svg" alt="facebook" /></div>
                <div className="BL-icon"><img src="./FormIcons/apple.svg" alt="apple" /></div>
            </div>
        </div>

    );
}

export default Form;
