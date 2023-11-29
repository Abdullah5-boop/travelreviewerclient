import React from 'react';

const Hotelprofilpart1 = ({hoteldata}) => {
    const HotelName =hoteldata[0]?.hotelname
    const hotelPrice =hoteldata[0]?.price;
    const hotelLocation=hoteldata[0]?.hrlocation;
    const hotelstaticinfo={HotelName,hotelPrice,hotelLocation}
    console.log(hotelstaticinfo)
  
    return (
        <>
            <div className='m-0 lg:mx-24 pt-10 lg:mb-10 grid grid-cols-1 lg:grid-cols-5'>
                <div className='col-span-2'>
                    <img className=' object-cover' src="https://source.unsplash.com/coconut-palm-trees-in-hotel-lobby-_dS27XGgRyQ" alt="" />
                </div>
                <div className='ml-0 lg:ml-20 col-span-3 '>
                    <div>

                        <h1><span className='text-2xl '> Name  :</span><span className='text-xl'>{hotelstaticinfo.HotelName}</span> </h1>
                    </div>
                    <div>

                        <h1><span className='text-2xl'> Location  :</span><span className='text-xl'> {hotelstaticinfo.hotelLocation}</span> </h1>
                    </div>
                    <div>

                        <h1><span className='text-2xl'> price  :</span><span className='text-xl'> {hotelstaticinfo.hotelPrice}</span> </h1>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Hotelprofilpart1;