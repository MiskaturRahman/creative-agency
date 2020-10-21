import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Logo from '../../../images/logos/logo.png';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className=" navbar navbar-expand-lg navbar-light ">
            <Link to="/home">
                <img className="ml-5" style={{ height: '60px' }} src={Logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/login">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5  " to="/CustomerDashboard/orderlist">Your Order</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" type="button" class="btn btn-dark mr-5 pl-3 pr-3">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin" type="button" class="btn btn-warning mr-5 pl-3 pr-3">Admin</Link>
                    </li>
                    <li>
                        <button onClick={() => setLoggedInUser({})} style={{ margin: '5px', padding: '5px' }} class="btn btn-info">Log Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;