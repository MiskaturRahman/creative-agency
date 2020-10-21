import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';


const Header = () => {
    return (
        <div className="header-container">
            <NavBar />
            <HeaderMain />

        </div>
    );
};

export default Header;