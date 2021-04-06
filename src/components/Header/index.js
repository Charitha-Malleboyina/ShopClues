import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.jpg';
import {Link} from 'react-router-dom';

const Header = props => {
    return(
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link>
                        <img style={{width:"40px",height:"40px"}}src={logo} alt="logo"></img>
                    </Link>
                </div>
                
                <h1 className="head">SHOPCLUES</h1>
            </div>
            <div className="callToAction">
            <ul>
                <li>
                <Link to='/Registration'>
                        Register
                </Link>
                </li>
                <li>
                <Link to='/About'>
                        About
                </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Header;