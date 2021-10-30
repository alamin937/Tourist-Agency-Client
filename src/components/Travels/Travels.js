import React from 'react';
import './Travels.css'

const Travels = () => {
    return (
        <div>
            <h1 className='mt-4 text-danger'>Travels</h1>
            <hr />
           <div  className='travels'>
           <div className='travel1'>
            <span> <i class="far fa-heart"></i></span>
            <h2>20% Discount now!</h2>
            <p>Because at least once in your life you need to look at the place where Bjork was born and grew up.</p>
            </div>
            <div className='travel1'>
            <span><i class="fas fa-rocket"></i></span>
            <h2>Travel in comfort</h2>
            <p>It is better to take care of airplane tickets in advance. We take care of you.</p>
            </div>
            <div className='travel1'>
            <span><i class="fas fa-globe-europe"></i></span>
            <h2>Travel with us</h2>
            <p>The best way to travel in Iceland is a rented car. We offer this service as well.</p>
            </div>
           </div>
        </div>
    );
};

export default Travels;