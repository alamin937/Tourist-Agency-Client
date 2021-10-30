import React from 'react';
import Explore from '../../Explore/Explore';
import Travels from '../../Travels/Travels';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Tourist from '../Tourist/Tourist';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tourist></Tourist>
            <Travels></Travels>
            <Explore></Explore>
            <Footer></Footer>
        </div>
    );
};

export default Home;