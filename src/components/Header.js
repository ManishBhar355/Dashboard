import React from 'react';
// import './Header.css'; // Ensure you import your CSS
import inbox from "../assets/images/inbox.png";
import setting from "../assets/images/setting.png";
import alertt from "../assets/images/alertt.png";
import profile from "../assets/images/profile.png";

const Header = () => {
    return (
        <div className="header">
            <input className="search-bar" type="text" placeholder="Search" />
            <div className="header-icons">
                <div className="header-icon header-icon1"><img src={inbox}></img></div>
                <div className="header-icon"><img src={setting}></img></div>
                <div className="header-icon"><img src={alertt}></img></div>
                <div className="header-icon"><img src={profile}></img></div>
            </div>
        </div>
    );
};

export default Header;
