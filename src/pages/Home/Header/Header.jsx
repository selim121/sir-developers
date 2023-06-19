import React from 'react';
import headerImg from '../../../assets/header.svg';
import bg from '../../../assets/services-bg.png';

const Header = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.001)), url(${bg})` }}>
                <div className="space-y-4 text-center px-3 md:text-start">
                    <h1 className="text-4xl font-semibold text-white">
                        Start Growing Your Business Trough Better SEO
                    </h1>
                    <p className="text-[#FFFFFF] font-light">
                        Maximize your visibility, getting better results is easy
                    </p>
                    <button className='bg-gradient-to-r from-[#DE55A2] to-[#C13BA1] py-3 px-5 text-white uppercase rounded-3xl text-sm hover:opacity-90'>Get Started</button>
                </div>
                <div className="">
                    <img src={headerImg} />
                </div>
            </div>
        </>
    );
};

export default Header;