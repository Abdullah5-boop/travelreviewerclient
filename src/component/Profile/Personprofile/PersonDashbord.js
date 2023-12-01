import React, { useEffect, useState } from 'react';
import auth from '../../../Firebase.init';

const PersonDashbord = () => {
    const [signstatus,setsignstatus]=useState(false)
    let img1 = signstatus?.photoURL

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            var uid = user?.uid;
            if (uid) {
                console.log(user)
                setsignstatus(user)
            }
            else { console.log("uid is not exit", uid) }
        })

    }, [])
    
    return (
        <div className='mx-24 grid grid-cols-1 lg:grid-cols-3 pt-14 '>
            <div className='  w-[80%] h-[70vh] personprofile-img-container'>
                <img className=' w-100 h-[80%] object-cover' src={img1} alt="" />

            </div>
            <div className=' col-span-2 '>
                <div>
                    <h1 className='text-4xl font-bold font-serif underline '>Name</h1>
                    <p className='text-xl font-serif my-2'>{signstatus?.displayName}</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold font-serif underline '>Location</h1>
                    <p className='text-xl font-serif my-2'>Dhaka.</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold font-serif underline '>EmailVerified</h1>
                    <p className='text-xl font-serif my-2'>{signstatus?.emailVerified ?"true":"flase"}</p>
                </div>
                <div>
                    <h1 className='text-4xl font-bold font-serif underline '>Account ID</h1>
                    <p className='text-xl font-serif my-2'>{signstatus?.uid ?signstatus?.uid :"Please log "}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonDashbord;