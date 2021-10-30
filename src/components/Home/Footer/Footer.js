import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{backgroundColor:'black', paddingBottom:'100px', paddingTop:'40px', marginTop:'20px',color:'white'}}>
            <h1 style={{margin:'0', color:'white'}}>Travel Agent</h1>
            <hr />
           <div>
                <h3>Quick Menu</h3>
                <p>COMPANY OVERVIEW <br /> MESSAGE FROM CEO <br /> TOUR PACKAGE <br /> VISA SERVICES <br /> BLOG</p>
           </div>
           <div className='icon'>
               <span><i class="fab fa-facebook"></i></span>
               <span><i class="fab fa-twitter"></i></span>
               <span><i class="fab fa-whatsapp"></i></span>
               <span><i class="fab fa-instagram"></i></span>
           </div>
        </div>
    );
};

export default Footer;