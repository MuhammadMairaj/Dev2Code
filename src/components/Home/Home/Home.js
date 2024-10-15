import React from 'react';
import BrandLogo from '../BrandLogo/BrandLogo';
import Clients from '../Clients/Clients';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div className="home">
            <Header id="home"/>
            <BrandLogo id="home"/>
            <Service id="service" />
            <Works id="portfolio" />
            <Clients id="client" />
            <Footer id="contact" />
        </div>
    );
};

export default Home;