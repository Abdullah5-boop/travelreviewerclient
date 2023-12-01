import React, { useEffect, useState } from 'react';
import auth from '../../../Firebase.init';

const HotelReview = ({ hoteldata, commentData }) => {
    const [cmnttxt, setcmnttext] = useState('')
    const [setemail, setsetemail] = useState("")








    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            var uid = user?.uid;
            if (uid) {
                setsetemail(user.email)
            }
            else { console.log("uid is not exit", uid) }
        })
    }, [])




    const handleCmntPost = () => {
        const url = "http://localhost:5000/reviewpost"
        if (cmnttxt.length> 0) {
            console.log({ commentData, cmnttxt, setemail, cmnlen: cmnttxt.length })

            fetch(url,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({ email: setemail, cmnt: cmnttxt,hotleid:commentData })
                })
                .then(function (res) { console.log(res) })
                .catch(function (res) { console.log(res) })

        }




        else {
            console.log({ commentData, cmnttxt, setemail, cmnlen: cmnttxt.length,text:"len 00" })
        }


        window.location.reload(true);
    }

    return (
        <div className='m-0 p-0 lg:mx-24 lg:mt-5 w-100 h-[100vh]'>
            <h1 className='text-3xl font-bold mt-10'>This is review</h1>


            {
                hoteldata.map(data => <>
                    <div className='mt-5'>
                        <h1 className='text-xl underline mb-2'>{data?.personname}</h1>
                        <p>{data.reviewtext}</p>
                    </div>

                </>)
            }






            <div>
                <form class=" w-100">
                    <div class="flex items-center border-b border-teal-500 py-2">
                        <input onChange={(e) => setcmnttext(e.target.value)} class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-100" type="text" placeholder="Write here" aria-label="Full name" />
                        <button
                            onClick={handleCmntPost}
                            class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Post
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default HotelReview;