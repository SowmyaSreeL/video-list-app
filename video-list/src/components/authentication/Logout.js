import '../scss/logout.scss';
import {Link} from 'react-router-dom';

const Logout = (props) => {
    return(
        <div className="logout__container">
            <Link to="/login">Logout</Link> 
        </div>
    )
}
export default Logout;