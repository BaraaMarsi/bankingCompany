import Start from "../Start/Start";
import '../../Components/Start/Start.css';

const StartSection = () => {
    return (

        <Start
                title="Start your financial journey with " titlespan="Your Bank today!"
                description="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
                buttonText="Open Account"
                buttonTo="/signup"
                buttonClass="Na-openaccount"
            />
        )
}

export default StartSection