import React from 'react';
import './styles.scss';
import logo from './../../assets/logo.jpg';
import {Link} from 'react-router-dom';
import {auth} from './../../firebase/utils';
const Header = props =>{
    const {currentUser} = props;

    return (
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img style={{width:"50px",height:"50px"}}src={logo} alt="logo"></img>
                    </Link>
                    
                </div>
                <h1>Shop Clues</h1>
            </div>
            <div className="callToAction">
                {!currentUser &&(
                    <ul>
                        <li>
                        <Link to="/registration">
                            Register
                        </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                )}

                {currentUser &&(
                    <ul>
                        <li>
                            <span onClick={()=>auth.signOut()}>
                                Logout
                            </span>
                        </li>
                    </ul>
                )}
                
                
            </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser:null
}

export default Header;