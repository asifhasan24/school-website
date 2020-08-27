import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
    return (
        <div >
            <nav className="navbar navbar-dark  bg-dark" >
            <a  href="/course">Programming Hero Courses</a>
           

            </nav>
        </div>
    );
};

export default Header;
