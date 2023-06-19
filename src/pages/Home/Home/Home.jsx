import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <div className="bubbles">
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
                <div className="bubble"></div>
            </div>
            <Header />
            <Services />
        </>
    );
};

export default Home;