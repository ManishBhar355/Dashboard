import React from 'react'
import goal from "../assets/images/goal.png"
import arrow from "../assets/images/arrow.png"
import dishes from "../assets/images/dishes.png"
import menu from "../assets/images/menu.png"

const Highlight = () => {
  return (
    <div className='highlight'>
        <div className='goals'>
            <div className='goal-content'>
                <img src={goal}></img>
                <h6>Goals</h6>
            </div>
            <div className='goal-img'>
            <a href='#'>  <img src={arrow}></img></a>
            </div>
        </div>

        <div className='goals dishes'>
            <div className='goal-content'>
                <img src={dishes}></img>
                <h6>Popular Dishes</h6>
            </div>
            <div className='goal-img'>
            <a href='#'>  <img src={arrow}></img></a>
            </div>
        </div>

        <div className='goals'>
            <div className='goal-content'>
                <img src={menu}></img>
                <h6>Menus</h6>
            </div>
            <div className='goal-img'>
              <a href='#'>  <img src={arrow}></img></a>
            </div>
        </div>

    </div>
  )
}

export default Highlight