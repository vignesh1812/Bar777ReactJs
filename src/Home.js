import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

import carousel1 from './images/carousel 1.jpg';
import carousel2 from './images/carousel 2.jpg';
import carousel3 from './images/carousel 3.jpg';
import carousel4 from './images/carousel 4.jpg';
import carousel5 from './images/carousel 5.jpg';
const Home = () => {
  return (
    <div className='home text-white'>
     
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active carouselbox">
              <img src={carousel1} className="d-block w-100" alt="bar" />
              <div className="carousel-caption d-none d-md-block captionbox" >
                <h5 className='display-3' >BAR 777</h5>
                <p className='display-5'>it's Fine With Wine !</p>
                <button className='btn btn-primary mx-1'><Link  className='links' to='/booktable'>Book a Table Now!</Link></button>
                <button className='mx-1 btn btn-success'><Link  className='links' to='/contact'>Contact Us!</Link></button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carousel2} className="d-block w-100" alt="jackDaniels" />
            </div> 
            <div className="carousel-item">
              <img src={carousel3} className="d-block w-100" alt="menu" />
            </div>
            <div className="carousel-item">
              <img src={carousel4} className="d-block w-100" alt="table" />
            </div>
            <div className="carousel-item">
              <img src={carousel5} className="d-block w-100" alt="contact" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default Home