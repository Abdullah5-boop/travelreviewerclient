import React from 'react';
import img1 from './card1.jpg'
import img2 from './card2.jpg'
import img3 from './card3.jpg'

const Homepart2 = () => {
    return (
        <>
            <h1 className='text-6xl font-bold text-center  mb-32 mt-20 underline'>This is best review platfrom</h1>
            <section className='flex justify-around'>
            <div className='homepage2-container grid grid-cols-1 lg:grid-cols-3 w-100 h-[60vh] gap-20'>
                <div className='homepage2-main-card-container  '>

                    <div className=' homepage2-card-container px-0 py-0 lg:px-2 lg:py-2'>
                        <img src={img1} alt="" />
                        <h1 className='text-3xl font-bold mt-5'>Lorem ipsum dolor </h1>
                        <p className='Mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum corporis aspernatur quis doloremque </p>
                    </div>

                </div>
                <div className=''>
                    <div className='homepage2-main-card-container  '>
                        <div className=' homepage2-card-container px-2 py-2'>
                            <img src={img2} alt="" />
                            <h1 className='text-3xl font-bold mt-5'>Lorem ipsum dolor </h1>
                            <p className='Mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum corporis aspernatur quis doloremque </p>
                        </div>

                    </div>
                </div>
                <div className=''>

                    <div className='homepage2-main-card-container  '>
                        <div className=' homepage2-card-container px-2 py-2'>
                            <img src={img3} alt="" />
                            <h1 className='text-3xl font-bold mt-5'>Lorem ipsum dolor </h1>
                            <p className='Mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum corporis aspernatur quis doloremque </p>
                        </div>

                    </div>
                </div>
            </div>
            </section>
        </>
    );
};

export default Homepart2;