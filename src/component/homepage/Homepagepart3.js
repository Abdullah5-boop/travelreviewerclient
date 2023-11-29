import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Table from './Table';
import '../component.css'

const Homepagepart3 = () => {


    const [tabledata, settabledata] = useState([])

    const reqfortableData = (clickcountry) => {
        console.log(clickcountry)
        let url = `http://localhost:5000/country/${clickcountry}`
        fetch(url)
            .then(res => res.json())
            .then(data => settabledata(data))

    }
    const takealook = (id) => {
        let takelookobj = tabledata.find(e => e.hrid === id)
        console.log(takelookobj)

    }



    const navvariable = <>
        <div className='w-100  mr-1 rounded-lg  border'
            onClick={() => { reqfortableData('BD') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden  text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                Bangladesh
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border'
            onClick={() => { reqfortableData('PAK') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden  text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                Pakistan
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border'
            onClick={() => { reqfortableData('IND') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden    text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                India
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border'
            onClick={() => { reqfortableData('UAB') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden    text-gray-800 rounded-lg bg-gray-50 hover:text-black hover:bg-white">
                Dubai
            </a>
        </div>

    </>
    // const navvariable = <>
    //     <h1>Dubai</h1>
    //     <h1>Singapur</h1>
    //     <h1>india</h1>
    //     <h1>Aus</h1>
    //     <h1>USA</h1>
    //     <h1>Bangladesh</h1>
    // </>
    return (
        <>
            <div className='homepagepart3-container w-[98vw] h-[100vh] m-auto flex items-center'>
                <div className="w-[80vw] h-[60vh]   m-auto  ">
                    <h1 className='text-center text-3xl font-bold mb-28 custom-title'>Explore little bit more</h1>
                    <div className="par4-main-container grid grid-cols-1 lg:grid-cols-5 h-[65vh] ">
                        <div className='nav-container '>
                            <div className='navvariable   '>
                                {navvariable}
                            </div>
                        </div>
                        <div className='table-container col-span-4 	 '>

                            <Table tabledata={tabledata} takealook={takealook}></Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Homepagepart3;