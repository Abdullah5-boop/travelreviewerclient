import React from 'react';
import Banner from './Banner';
import '../component.css'
import Homepart2 from './Homepart2'
import Homepagepart3 from './Homepagepart3'
import Footer from './Footer';
import Navpag1 from './Nav/Navpag1';

const Homepage = () => {
    const handleStorageBtn = (event) => {
        event.preventDefault();
        console.log('h1')
        const Obj = { Name: "Abdullah" }
        const array = [Obj, Obj]
        localStorage.setItem('temp2',JSON.stringify(Obj))
        if(localStorage.getItem('temp1'))
       
        {
            console.log("exist")
        }
        else console.log('doesnt exist')
        const getstorages = localStorage.getItem('temp')
        console.log(typeof(JSON.parse(getstorages)))

    }

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
                {/* <button
                    onClick={handleStorageBtn}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">

                    Button
                </button> */}
            </div>
            {/* <div>
                <Footer></Footer>
            </div> */}


        </>
    );
};

export default Homepage;