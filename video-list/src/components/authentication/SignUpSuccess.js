import Layout from '../Layout/Layout';
import { Link } from "react-router-dom";
import Navbar from '../nav/Navbar';
import '../scss/sign-up-success.scss'

const SignUpSuccess = (props) => {
    return(
        <>
            <Navbar title="Sign up Success" loginStatus={props.loginStatus}/>
            <Layout>
                <p className="sign-up-to-login">click <Link to="/login">here</Link> to go to Login Page</p>
            </Layout>
        </>
    )
}

export default SignUpSuccess;