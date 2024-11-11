import React, { useEffect, useState } from 'react';

const Hotelprofilpart1 = ({ hoteldata, hotalid }) => {
    const HotelName = hoteldata[0]?.hotelname
    const hotelPrice = hoteldata[0]?.price;
    const hotelcnty = hoteldata[0]?.country;
    // const hotelLocation = hoteldata[0]?.hrlocation;
    const hotelstaticinfo = { HotelName, hotelPrice, hotelcnty }
    const [indetity, setindetity] = useState([]);
    useEffect(() => {
        let url = `http://localhost:5000
/identity/${hotalid}`
        fetch(url)
            .then(res => res.json())
            .then(data => setindetity(data))
    }, [])

    let hotelname = indetity[0]?.hotelname
    let hotecountry = indetity[0]?.country
    let hoteprice = indetity[0]?.price
    // let hotecountry = indetity[0].country
    return (
        <>
            <div className='m-0 lg:mx-24 pt-10 lg:mb-10 grid grid-cols-1 lg:grid-cols-5'>
                <div className='col-span-2'>
                    <img className=' object-cover' src="https://i.ibb.co.com/Z6R9tXr/marten-bjork-n-IKQDCyr-G0-unsplash.jpg" alt="" />
                </div>
                <div className='ml-0 lg:ml-20 col-span-3 '>
                    <div>

                        <h1><span className='text-2xl '> Name  :</span><span className='text-xl'>{hotelname}</span> </h1>
                    </div>
                    <div>

                        <h1><span className='text-2xl'> Location  :</span><span className='text-xl'> {hotecountry}</span> </h1>
                    </div>
                    <div>

                        <h1><span className='text-2xl'> price  :</span><span className='text-xl'> {hoteprice}</span> </h1>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Hotelprofilpart1;