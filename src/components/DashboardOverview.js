import React from 'react';
import order from "../assets/images/order.png";
import upstock from "../assets/images/upstock.png";
import downstock from "../assets/images/downstock.png";
import deliver from "../assets/images/deliver.png";
import cancel from "../assets/images/cancel.png";
import revenue from "../assets/images/revenue.png";


// import './DashboardOverview.css'; // Ensure you import your CSS

const DashboardOverview = () => {
    return (
        <div className="dashboard-overview">

            <div className="overview-card overview-card1">
                <img src={order}></img>
                <h6>Total Orders</h6>
                <div className='deliver'>
            <h2>75</h2>
                    <img src={upstock}></img>
                </div>

            </div>
            <div className="overview-card">
            <img src={deliver}></img>
                <h6>Total Delivered</h6>
                <div className='deliver'>
            <h2>70</h2>
                    <img src={downstock}></img>
                </div>
            </div>
            <div className="overview-card">
            <img src={cancel}></img>
                <h6>Total Cancelled</h6>
                <div className='deliver'>
            <h2>05</h2>
                    <img src={upstock}></img>
                </div>
            </div>
            <div className="overview-card">
            <img src={revenue}></img>
                <h6>Total Revenue</h6>
                <div className='deliver'>
            <h2>$12k</h2>
                    <img src={downstock}></img>
                </div>
            </div>
            {/* <div className="overview-card">Net Profit: $6759.25</div> */}
        </div>
    );
};

export default DashboardOverview;
