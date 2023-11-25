import React from 'react';

const HotelReview = () => {
    return (
        <div className='m-0 p-0 lg:mx-24 lg:mt-5 w-100 h-[100vh]'>
            <h1 className='text-3xl font-bold mt-10'>This is review</h1>
            <div className='mt-5'>
                <h1 className='text-xl underline mb-2'>Person Name</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, laboriosam. Debitis exercitationem, soluta voluptate ipsam quam eos eveniet incidunt. Officia obcaecati quaerat exercitationem placeat sit recusandae reprehenderit, veritatis eligendi excepturi!</p>
            </div>
            <div>
                <form class=" w-100">
                    <div class="flex items-center border-b border-teal-500 py-2">
                        <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none w-100" type="text" placeholder="Write here" aria-label="Full name"/>
                            <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                               Post
                            </button>
                          
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HotelReview;