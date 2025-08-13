import Form from "../../Components/Form/Form";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Login = () => {
    return (
        <>
        <Form isRegister={false} title={"Login"} description ={"Welcome back! Please log in to access your account."} />
        <Testimonials/>

       </>
    );

}

export default Login;
