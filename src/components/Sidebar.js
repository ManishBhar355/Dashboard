import React from 'react';
// import './Sidebar.css'; // Ensure you import your CSS
import logo from "../assets/images/logo.png";
import home from "../assets/images/home.png";
import graph from "../assets/images/graph.png";
import confirmed from "../assets/images/confirmed.png";
import wallet from "../assets/images/wallet.png";
import cart from "../assets/images/cart.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
             <div className="sidebar-icon logo"><img src={logo}></img></div>
            <div className="sidebar-icon"><img src={home}></img></div>
            <div className="sidebar-icon"><img src={graph}></img></div>
            <div className="sidebar-icon"><img src={confirmed}></img></div>
            <div className="sidebar-icon"><img src={wallet}></img></div>
            <div className="sidebar-icon"><img src={cart}></img></div>
        </div>
    );
};

export default Sidebar;
