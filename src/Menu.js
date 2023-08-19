import React from 'react'
import './menu.css';
import menu from './images/menu.jpg';



const Menu = () => {
  return (
    <div className='menu'>
      <section className='text-white'>
        <div className="menuItem">
          <img src={menu} alt="menu" />
           <div className="menu-content">
                <h5 className='display-2'>Bar 777</h5>
                <p className='display-5'>Coming Soon!</p>
            </div> 
        </div>
      </section>
    </div>
  )
}

export default Menu