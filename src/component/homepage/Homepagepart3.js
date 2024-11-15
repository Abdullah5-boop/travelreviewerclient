import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Table from './Table';
import '../component.css'
import auth from '../../Firebase.init';

const Homepagepart3 = () => {

    useEffect(() => {
        reqfortableData('BD')
    }, [])

    const [tabledata, settabledata] = useState([])
    const reqfortableData = (clickcountry) => {


        let url = `http://localhost:5000/country/${clickcountry}`
        fetch(url)
            .then(res => res.json())
            .then(data => settabledata(data))

    }
    const takealook = (id) => {
        let takelookobj = tabledata.find(e => e.hrid === id)
        // console.log(takelookobj)

    }

    const style = {
        // backgroundColor: 'red',
        color:'red'
        
      };


    let find_active_class = document.querySelectorAll('.onclick_class')
    
    find_active_class.forEach((link) => {
     
        link.addEventListener('click', (e) => {


            let prevcomps= document.querySelectorAll('.onclick_class')
            prevcomps.forEach((prevcomp)=>{
                prevcomp.classList.remove('active')
            })








            link.classList.add('active')
            console.log(link)
        })
        console.log(find_active_class)



    })






    const navvariable = <>
        <div className='w-100  mr-1 rounded-lg  border onclick_class active'
            onClick={() => { reqfortableData('BD') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden   rounded-lg  hover:text-black hover:bg-white">
                Bangladesh
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border onclick_class'
            onClick={() => { reqfortableData('PAK') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden   rounded-lg hover:text-black hover:bg-white">
                Pakistan
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border onclick_class'
            onClick={() => { reqfortableData('IND') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden     rounded-lg hover:text-black hover:bg-white">
                India
            </a>
        </div>
        <div className='w-100  mr-1 rounded-lg  border onclick_class'
            onClick={() => { reqfortableData('CA') }}
        >
            <a href="#_" class="relative block w-auto px-3 py-3 overflow-hidden     rounded-lg hover:text-black hover:bg-white">
                Canada
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