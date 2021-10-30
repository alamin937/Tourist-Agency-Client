import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <hr />
            <div style={{width:'35%', margin:'0 auto', textAlign:'justify'}}>
                <h3>Bashati Condominum (Floor 10/D), <br /> House #15, Mirpur-2, <br /> Bangladesh</h3>
                <h4>Mobile: 017777777</h4>
                <h3>Email: anik@gmail.com</h3>
                <div className='icon'>
                <span><i class="fab fa-facebook"></i></span>
               <span><i class="fab fa-twitter"></i></span>
               <span><i class="fab fa-whatsapp"></i></span>
               <span><i class="fab fa-instagram"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Contact;