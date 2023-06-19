import React from 'react';
import img1 from '../../../assets/icons/1.svg';


const Services = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="card bg-gradient-to-r from-[#DE55A2] to-[#C13BA1] text-white h-[250px] w-full md:w-60 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                            <div className="card-body text-center">
                                <img className='h-20' src={img1} />
                                <h2 className="card-title">
                                    Keep tasks in one place
                                </h2>
                                <p className='text-xs'>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                            </div>
                        </div>
                        <div className="card bg-gradient-to-r from-[#DE55A2] to-[#C13BA1] text-white h-[250px] w-full md:w-60 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                            <div className="card-body text-center">
                                <img className='h-20' src={img1} />
                                <h2 className="card-title">
                                    Keep tasks in one place
                                </h2>
                                <p className='text-xs font-light'>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-gradient-to-r from-[#DE55A2] to-[#C13BA1] text-white h-[250px] w-full md:w-60 shadow-[0_0_10px_rgba(0,0,0,0.3)]">
                        <div className="card-body text-center">
                            <img className='h-20' src={img1} />
                            <h2 className="card-title">
                                Keep tasks in one place
                            </h2>
                            <p className='text-xs font-light'>Save time, avoid losing work and information, delegate, and track tasks to stay on schedule</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 flex justify-center">
                    <div className="w-3/4">
                        <h1 className="text-2xl font-semibold">
                            Start Growing Your Business Trough Better SEO
                        </h1>
                        <p className="text-[#777777]">
                            Maximize your visibility, getting better results is easy
                        </p>
                        <button className='bg-gradient-to-r from-[#DE55A2] to-[#C13BA1] py-3 px-5 text-white uppercase rounded-3xl text-sm hover:opacity-90'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;