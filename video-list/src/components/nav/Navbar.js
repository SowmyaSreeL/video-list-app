

import Logout from '../authentication/Logout'
import Layout from "../Layout/Layout";
import '../scss/navbar.scss';

const Navbar = (props) => {
    return (
        <Layout className="navbar__container">
            <div className="title">
                <h1>{props.title}</h1>
            </div>
            {props.loginStatus==="true" && <Logout />}
        </Layout>
    )
}

export default Navbar;