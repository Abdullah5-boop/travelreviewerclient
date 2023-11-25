import React from 'react';

const PersonDashbord = () => {
    let img1='https://source.unsplash.com/gray-squirrel-on-brown-surface-BeoRcYyVgxE'
    return (
        <div className='mx-24 grid grid-cols-1 lg:grid-cols-3 pt-14 '>
           <div className=' bg-red-300 w-[80%] h-[70vh] personprofile-img-container'>
            <img className=' w-100 h-[70%] object-cover' src={ img1}alt="" />

            </div>
           <div className=' col-span-2 bg-slate-500'>
            <div>
                <h1 className='text-2xl underline'>Name</h1>
                <p className='tex-xl'>Lorem, ipsum dolor.</p>
            </div>
            <div>
                <h1>Name</h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
           </div>
        </div>
    );
};

export default PersonDashbord;