import './Form.css';
import Button from '../Button/Button';
import { useState } from 'react';



const Form = ({ isRegister, title, description }) => {
    const [showPassword, setShowPassword] = useState(false);
    return (




        <div className="BL-formContainer ">
            <div className='Am-overlay'></div>
<img src="FormIcons/startpic.png" alt="checkmark" className="BL-checkmark" />


            <div className='BL-formHeader'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>

            <div className="BL-form">
                <form>
                    <div className='BL-formInput'>
                        {isRegister &&
                            <div className="BL-nameInput">
                                <input type="text" placeholder="Enter First Name" />
                                <input type="text" placeholder="Enter Last Name" />
                            </div>
                        }
                        <div className="BL-emailInput">
                            <input type="email" placeholder="Enter Your Email" />
                            <div className='BL-passwordInput'>
                                <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password" />
                                <img className="toggle-password BL-passwordIcon" onClick={() => setShowPassword(!showPassword)} src="./FormIcons/password.svg" alt="eye"/>
                            </div>
                        </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                </form>
                <div className='BL-buttonGroup' id='formBtn'>
                    <Button text="Sign Up" to="/signup" className="Na-signup_form" />
                    <Button text="Login" to="/login" className="Na-login_form" />
                </div>

                <div className="BL-separator">
                    <div className="line"></div>
                    <span>Or Continue with</span>
                    <div className="line"></div>
                </div>

                <div className="BL-social">
                    <div className="BL-icon"><img src="./FormIcons/gmail.svg" alt="gmail" /></div>
                    <div className="BL-icon"><img src="./FormIcons/facebook.svg" alt="facebook" /></div>
                    <div className="BL-icon"><img src="./FormIcons/apple.svg" alt="apple" /></div>
                </div>
            </div>
        </div>





    );
}

export default Form;
