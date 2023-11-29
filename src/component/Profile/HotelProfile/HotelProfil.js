import React, { useEffect, useState } from 'react';
import Hotelprofilpart1 from './Hotelprofilpart1';
import HotelReview from './HotelReview';
import { useParams } from 'react-router-dom';

const HotelProfil = () => {
    const { id } = useParams();
    const [data,setdata]=useState([]);

  
    useEffect(() => {
   
        let url=`http://localhost:5000/hotel/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setdata(data))
    }, [])


   console.log(data)

   

    return (
        <div className='bg-[#F3EEEA]'>
            <div className='w-100 h-[50vh] '>
                <Hotelprofilpart1 hoteldata={data}></Hotelprofilpart1>
            </div>
            <div>
                <HotelReview hoteldata={data}></HotelReview>
            </div>
        </div>
    );
};

export default HotelProfil;