import React from 'react'
import upstock from "../assets/images/upstock.png"
import netimg from "../assets/images/netimg.png"

const NetProfit = () => {
  return (
    <div className='net-main'>
        <div className='row'>
            <div className='col-lg-6'>
        <h6>Net Profit</h6>
        <h2>$6759.25</h2>
        <img src={upstock}></img>
    </div>
    <div className='col-lg-6 text-lg-center text-center'>
        <img className='net-img-percnt' src={netimg}></img>
        <h6 className='net-h6'>The value here has been rounded off.</h6>
    </div>
    </div>
    </div>
  )
}

export default NetProfit