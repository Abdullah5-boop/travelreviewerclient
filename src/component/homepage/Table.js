import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Table = ({ tabledata, takealook }) => {
    const navigate = useNavigate()

    const HotelprofilenavigateFun = (id) => {
        navigate(`hotel/${id}`)

    }
    return (
        <div className=''>
            <div>

                <div class=" mx-auto w-100">

                    <div class="flex flex-col">
                        <div class="overflow-x-auto shadow-md sm:rounded-lg">
                            <div class="inline-block min-w-full align-middle">
                                <div class="overflow-hidden ">
                                    <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                        <thead class="bg-gray-100 dark:bg-gray-700">
                                            <tr>

                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Hotel Name
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Country
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Price per day
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Total review
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Plan
                                                </th>
                                                <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                                    Take a look
                                                </th>

                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                            {
                                                tabledata.map(data => <>

                                                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">

                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.hotelname}</td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{data?.country}</td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{data?.price}</td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">10</td>

                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <button> unlock
                                                            </button>
                                                        </td>
                                                        <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <button
                                                                onClick={() => {


                                                                    HotelprofilenavigateFun(data?.hrid)
                                                                }

                                                                }
                                                            >
                                                                <Link to='/hotel'>View</Link>
                                                            </button>
                                                        </td>

                                                    </tr >
                                                </>)
                                            }
                                            {/* <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">

                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple Imac 27"</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">Desktop PC</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">$1999</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">10</td>
                                                <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <button> unlock
                                                    </button></td>

                                            </tr> */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Table;