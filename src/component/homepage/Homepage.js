import React from 'react';
import Banner from './Banner';
import '../component.css'
import Homepart2 from './Homepart2'
import Homepagepart3 from './Homepagepart3'
import Footer from './Footer';
import Navpag1 from './Nav/Navpag1';

const Homepage = () => {
    return (
        <>
            <Navpag1 />
            <div className=' w-100 h-[80vh]'>
                <Banner></Banner>
            </div>
            <div className='mx-0 lg:mx-32 mt-10  '>
                <Homepart2></Homepart2>
            </div>
            <div className=' hidden lg:block '>
                <Homepagepart3></Homepagepart3>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </>
    );
};

export default Homepage;