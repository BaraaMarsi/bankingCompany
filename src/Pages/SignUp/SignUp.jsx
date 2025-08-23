import { useEffect } from "react";
import Form from "../../Components/Form/Form";
import Testimonials from "../../Components/Testimonials/Testimonials";

const SignUp = () => {
    useEffect(() => {
        document.title = "Banking Company / SignUp Page"
    }, [])
    return (
        <div className="container">
            <Form isRegister={true} title={"Sign Up"} description ={"Join our community today! Create an account to unlock exclusive features and personalized experiences."}/>
            <Testimonials/>
        </div>
    );
}

export default SignUp;
