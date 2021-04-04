import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.jpg';

const Header = props => {
    return(
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <img style={{width:"40px",height:"40px"}}src={logo} alt="logo"></img>
                </div>
            </div>
        </div>
    )
}

export default Header;