import Form from "../../Components/Form/Form";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Login = () => {
    return (
        <>
            <div className="container">
                <Form isRegister={false} title={"Login"} description={"Welcome back! Please log in to access your account."} />
                <Testimonials />

            </div>

        </>
    );

}

export default Login;
