import React from 'react';
import Hotelprofilpart1 from './Hotelprofilpart1';
import HotelReview from './HotelReview';

const HotelProfil = () => {
    return (
        <div className='bg-[#F3EEEA]'>
            <div className='w-100 h-[50vh] '>
                <Hotelprofilpart1></Hotelprofilpart1>
            </div>
            <div>
                <HotelReview ></HotelReview>
            </div>
        </div>
    );
};

export default HotelProfil;