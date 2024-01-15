import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';

const Header = () => {
  
  return (
    <div className='esas'>
 

    <Swiper
    
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Pagination]} autoplay={{
            delay: 2500
            
        }}
        className="mySwiper"
      >
        <SwiperSlide className='sw1'>
        <div className='header__left'>
        <div><h1>Pulse<span>.</span></h1></div>
        <ul>
          <Link className='link' to="/">Home </Link>
          <Link className='link' to="/wishlist">Wishlist </Link>
          <Link className='link' to="/add">Add</Link>
          <Link className='link'  to='/Basket'>Basket</Link>
        
      
          
        </ul>
        <div style={{paddingTop:"10px"}}><p ><span>Reservations</span><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i>652-345 3222 11</p></div>
    </div>
    <div className='desc'>

         <h1>Food and more<span>.</span></h1>
         <p>By Chef Francis Smith</p>
    </div>
          
        </SwiperSlide>
        <SwiperSlide className='sw2'>
        <div className='header__left'>
        <div><h1>Pulse<span>.</span></h1></div>
        <ul>
          <Link className='link' to="/">Home </Link>
          <Link className='link' to="/wishlist">Wishlist </Link>
          <Link className='link' to="/add">Add</Link>
          <Link className='link'  to='/Basket'>Basket</Link>
        
      
          
        </ul>
        <div style={{paddingTop:"10px"}}><p ><span>Reservations</span><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i>652-345 3222 11</p></div>
    </div>
    <div className='desc'>

<h1>Food and more<span>.</span></h1>
<p>By Chef Francis Smith</p>
</div>
        </SwiperSlide>
        <SwiperSlide className='sw3'>
        <div className='header__left'>
        <div ><h1>Pulse <span>.</span></h1></div>
        <ul>
          <Link className='link' to="/">Home </Link>
          <Link className='link' to="/wishlist">Wishlist </Link>
          <Link className='link' to="/add">Add</Link>
          <Link className='link'  to='/Basket'>Basket</Link>
        
      
          
        </ul>
        <div style={{paddingTop:"10px"}}><p ><span>Reservations</span><i class="fa-solid fa-phone" style={{color: "#ffffff"}}></i>652-345 3222 11</p></div>
    </div>
    <div className='desc'>

<h1>Food and more<span>.</span></h1>
<p>By Chef Francis Smith</p>
</div>
        </SwiperSlide>
       
      </Swiper>


    </div>
   
  )
}

export default Header