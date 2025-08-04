import Form from "../../Components/Form/Form";

const SignUp = () => {
    return (
        <div className="container">
            <Form isRegister={true} title={"Sign Up"} description ={"Join our community today! Create an account to unlock exclusive features and personalized experiences."}/>
        </div>
    );
}

export default SignUp;
