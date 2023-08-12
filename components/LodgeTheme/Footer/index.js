import React from 'react'
import { BsFacebook,BsDot} from "react-icons/bs";
import { AiOutlineTwitter} from "react-icons/ai";



function Footer({ allHotelDetails }) {
    let date = new Date();
    return (
        <section className='bg-black'>
            <div className='py-12 px-5 lg:px-24 text-white'>
                <div>

                    <div className='pb-5'>
                        <div className='text-center'>
                            <div className='border border-white inline-block mx-auto'>
                                <p className='px-4 py-2 text-sm lg:text-base font-medium uppercase'>{allHotelDetails.property_name}</p>
                            </div>
                        </div>
                    </div>

                    <div className='py-6'>
                        <div className='md:flex md:justify-evenly'>
                            <div className='text-center flex justify-center md:justify-center md:w-4/12'>
                                <span className=''><BsFacebook size={17} /></span>
                                <span className='ml-3'><AiOutlineTwitter size={20} /></span>
                            </div>

                            {/* hotel address */}
                            <div className='md:w-4/12'>
                                <div className='px-8 pt-2 md:pt-0'>
                                    <div className='text-center text-sm lg:text-base mb-5'>
                                        <p>{allHotelDetails?.property_name}</p>
                                        <p className='pt-1'>{allHotelDetails?.address?.[0]?.address_street_address}, {allHotelDetails?.address?.[0]?.address_city}</p>
                                        <p className='pt-1'>{allHotelDetails?.address?.[0]?.address_zipcode}, {allHotelDetails?.address?.[0]?.address_country}</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* hotel contacts */}
                            <div className='md:w-4/12'>
                                {allHotelDetails?.contacts?.map((contact, index) => {
                                    return (
                                        <div key={index} className=' pb-5 text-center text-sm md:text-start lg:text-base'>
                                            <ul>
                                                <li>
                                                    <span className='text-slate-300'><em>{contact?.contact_type}:-</em></span>
                                                    <span> {contact?.contact_data}</span>

                                                </li>

                                            </ul>
                                        </div>);
                                })}
                            </div>

                        </div>
                    </div>

                    <div className='mb-5'>
                        <div>
                            <ul className='flex justify-center'>
                                <li className='flex'><a>Rooms</a><span className='my-auto mx-2'><BsDot size={25}/></span></li>
                                <li className='flex'><a>Services</a><span className='my-auto mx-2'><BsDot size={25}/></span></li>
                                <li><a>About</a></li>              
                            </ul>
                        </div>
                        
                    </div>

                    <div className='text-center md:text-center lg:text-center pt-10 border-t-2'>
                    <p className='text-xs'>Copyright &copy; {date.getFullYear()} All Rights Reserved</p>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Footer