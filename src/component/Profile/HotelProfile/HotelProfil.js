import React, { useEffect, useState } from 'react';
import Hotelprofilpart1 from './Hotelprofilpart1';
import HotelReview from './HotelReview';
import { useParams } from 'react-router-dom';
import auth from '../../../Firebase.init';

const HotelProfil = () => {

    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [email, setemail] = useState("")

    const commentData = (cmnt) => {
        console.log(cmnt)
    }
    console.log(id)
    useEffect(() => {

        let url = `http://localhost:5000/hotel/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setdata(data))

  
    }, [])








    return (
        <div className='bg-[#F3EEEA]'>
            <div className='w-100 h-[50vh] '>
                <Hotelprofilpart1 hoteldata={data} hotalid={id}></Hotelprofilpart1>
            </div>
            <div>
                <HotelReview hoteldata={data} commentData={id}></HotelReview>
            </div>
        </div>
    );
};

export default HotelProfil;