import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navpag1 = () => {
    const [hambarguron, sethambarguron] = useState(false)
  
    const testing = () => {
        console.log("button is clicked")
    }
    let navcontent = <>
        <ul className=' flex justify-between items-end  '>
            <li>Nav2</li>
            <li>Nav3</li>
            <li><Link to={`/PersonDashbord`}>Hotel</Link></li>
            <li><Link to={`/hotel`}>Dashbord</Link></li>
            <li><Link to={`/login`}>Login</Link></li>
            <li><Link to={`/signup`}>Sign up</Link></li>
        </ul>
    </>
    let navcontent2 = <>
        <ul className='h-[50vh] w-[40%]  lg:w-[100%]   text-xl font-serif flex flex-col-reverse justify-between items-center'>
            <li className='mb-3'>Nav1</li>
            <li>Nav2</li>
            <li>Nav3</li>
            <li>Nav4</li>
            <li>Nav5</li>
        </ul>
    </>
    return (
        <>
            {/* This is hambargur */}
            <div className='block lg:hidden'>
                <div className="hambarger-meanu h-[50px] w-[50px]  ">
                    <FontAwesomeIcon
                        onClick={() => sethambarguron(!hambarguron)}
                        className='hambargur' icon={faBars} />
                </div>
                {
                    hambarguron ? <>

                        <div className='  w-100  h-100 flex justify-center '>
                            {navcontent2}
                        </div>
                    </> : <></>
                }

            </div>
            {/* <section className='  bg-slate-700  '>
            </section> */}
            <section className='hidden lg:block '>
                <div className='flex  fixed w-[100vw] px-8  bg-slate-50'>
                    <div className='  flex items-center text-3xl font-bold '>
                        <h1>Company LOGO</h1>
                    </div>
                    <div className=' ml-auto w-[40%] font-serif text-2xl  py-5'>{navcontent}</div>
                </div>
            </section>

        </>
    );
};

export default Navpag1;