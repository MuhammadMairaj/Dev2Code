import React from 'react';
import Footer from '../Footer/Footer';
import ServiceID from '../Service/ServiceID';
import NavigationBar from '../NavigationBar/NavigationBar'


const ServicesName = () => {
    return (
        <div>
            <NavigationBar />
            <ServiceID />
            <Footer/>
        </div>
    );
};

export default ServicesName;