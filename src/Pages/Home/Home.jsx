import Section from "../../Components/Section/Section";
import Start from "../../Components/Start/Start";

const Home = () => {
    return (
        <div>
            <Start 
            title="Start your financial journey with " titlespan="Your Bank today!"
            description="Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service"
            buttonText="Open Account"
            buttonTo="/signup"
            />
        </div>
        
    );
}

export default Home;
