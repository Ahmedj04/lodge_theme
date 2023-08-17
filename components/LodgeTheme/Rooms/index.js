import React from 'react'
import { TiTick } from "react-icons/ti";
import { useInView } from 'react-intersection-observer';
import Loader from '../Loaders/Loader';



function Rooms({ rooms, roomDetailLoader }) {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.1,    // Trigger animation when 10% of the element is in view
    });

    return (
        <section id='rooms' className='bg-custom-brown'>
            <div ref={ref} className={`py-10 md:pt-20 lg:pt-36 px-5 lg:px-28 lg:mx-24 ${inView ? 'animate-slide-in' : 'opacity-0'}`}>
                <div>
                    {/* room heading */}
                    <div className='mb-5 md:mb-10 text-center'>
                        <div>
                            <h2 className='text-4xl lg:text-6xl text-slate-700'> OUR ROOMS</h2>
                        </div>
                    </div>

                    {roomDetailLoader === 0 ? <><Loader size={`h-40 w-full`} /><Loader size={`h-40 w-full`} /><Loader size={`h-40 w-full`} /> </> :
                        <>
                            {/* room details */}
                            {rooms.map((room, index) => {
                                return (
                                    <div key={index} className='mb-5 border-b-2 border-slate-300 '>
                                        <div className='md:my-5 lg:my-12 md:flex text-center md:text-start'>
                                            {/* room image */}
                                            <div className='md:w-3/12'>

                                                {Object.keys(room).includes('room_images') ? <img className='rounded-md ' src={room?.room_images[0].image_link}></img> : <img className='rounded-md ' src="https://themewagon.github.io/sogo/images/slider-3.jpg" alt="image" />}

                                            </div>

                                            {/* room description */}
                                            <div className='md:w-6/12'>
                                                <div className='p-5 md:px-16 md:py-0 lg:px-10'>
                                                    {/* room name */}
                                                    <div className='mb-5'>
                                                        <div>
                                                            <h5 className='text-xl lg:text-2xl text-slate-700 font-normal'>{room?.room_name}</h5>
                                                        </div>
                                                    </div>

                                                    {/* room description */}
                                                    <div className='mb-5'>
                                                        <div>
                                                            <p className='text-sm lg:text-base text-slate-600'>{room?.room_description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Additional details */}
                                                    <div>
                                                        <ul>
                                                            <li className='flex justify-center md:justify-start text-slate-700'>
                                                                <span className='my-auto'><TiTick /></span>
                                                                <span className='pl-2'>{room?.minimum_number_of_occupants} - {room?.maximum_number_of_occupants} Persons</span>

                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* room price */}
                                            <div className='mb-5 md:my-auto md:w-3/12'>
                                                <div>
                                                    {room?.unconditional_rates?.map((resource, index) => {
                                                        return <h6 key={index} className="text-lg md:text-base text-slate-700 ">FROM {resource?.baserate_currency + " " + resource?.baserate_amount}</h6>
                                                    })}
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                );
                            })}
                        </>
                    }


                </div>

            </div>
        </section>
    )
}

export default Rooms