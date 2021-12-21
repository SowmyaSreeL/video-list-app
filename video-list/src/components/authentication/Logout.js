import '../scss/logout.scss';
import {Link} from 'react-router-dom';

const Logout = (props) => {
    // const logoutHandler = () => {
    //     localStorage.removeItem('user_logged_in');
    // }
    return(
        <div className="logout__container">
            <Link to="/login">Logout</Link> 
        </div>
    )
}
export default Logout;