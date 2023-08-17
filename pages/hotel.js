import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios';
import Header from '../components/LodgeTheme/Header'
import Home from '@/components/LodgeTheme/Home'
import About from '@/components/LodgeTheme/About'
import Rooms from '@/components/LodgeTheme/Rooms';
import Review from '@/components/LodgeTheme/Review';
import Footer from '@/components/LodgeTheme/Footer';
import Services from '@/components/LodgeTheme/Services';
import Photos from '@/components/LodgeTheme/Photos';
import { AiOutlineClose } from "react-icons/ai";


function Hotel() {

  const [allHotelDetails, setHotelDetails] = useState([]);
  const [rooms, setRooms] = useState([]);

  // loaders
  const [hotelDetailLoader, setHotelDetailLoader] = useState(0);
  const [roomDetailLoader, setRoomDetailLoader] = useState(0);

  const [menu, setMenu] = useState(0)


  useEffect(() => {
    getHotelDetails();
    getRoomDetails();

  }, []);

  function getHotelDetails() {
    let url = "/api/jammu-and-kashmir/srinagar/hotels/t2k0032";
    axios.get(url)
      .then((response) => {
        setHotelDetails(response.data)
        console.log("hotel details loaded succesfully")
        setHotelDetailLoader(1)

      })
      .catch((err) => {
        console.log(JSON.stringify(err))
      })
  }

  function getRoomDetails() {
    let url = "api/all_rooms_details/t2k0032";
    axios.get(url)
      .then((response) => {
        setRooms(response.data.rooms);
        console.log("room details loaded successfull")
        setRoomDetailLoader(1);
      })
      .catch((err) => {
        console.log(JSON.stringify(err))
      })
  }

  return (

    <main>

      <Header
        allHotelDetails={allHotelDetails}
        menu={menu}
        setMenu={setMenu}
        hotelDetailLoader={hotelDetailLoader}

      />

      <Home
        allHotelDetails={allHotelDetails}
      />

      <About
        allHotelDetails={allHotelDetails}
        hotelDetailLoader={hotelDetailLoader}

      />

      <Photos
        allHotelDetails={allHotelDetails}
        hotelDetailLoader={hotelDetailLoader}

      />

      <Services
        allHotelDetails={allHotelDetails}
        hotelDetailLoader={hotelDetailLoader}

      />

      <Rooms
        rooms={rooms}
        roomDetailLoader={roomDetailLoader}

      />

      <Review
        data={allHotelDetails?.Reviews}
        hotelDetailLoader={hotelDetailLoader}

      />

      <Footer
        allHotelDetails={allHotelDetails}
      />

     
      {/* menu for small screen */}
      <div className={`transition-transform duration-500 ease-in-out transform ${menu === 1 ? 'translate-x-0' : '-translate-x-full'} fixed inset-0 z-50`}>
            {/* Dark background */}
            <div className={`absolute inset-0 bg-black opacity-70 transform transition-transform duration-500 ease-in-out ${menu === 1 ? 'translate-x-0' : '-translate-x-full'}`}></div>

            {/* Content */}
            <div className={`absolute inset-y-0 left-0 w-8/12 bg-custom-brown p-4 transform transition-transform duration-1000 ease-in-out ${menu === 1 ? 'translate-x-0 delay-300' : '-translate-x-full'}`}>
                <div className='flex justify-between'>
                    <div className='border border-black inline-block'>
                        <p className='px-2 py-2 text-base font-medium uppercase'>{allHotelDetails.property_name}</p>
                    </div>
                    <button onClick={() => setMenu(0)}><AiOutlineClose /></button>
                </div>

                <div>
                    <ul className='pt-10 text-lg' onClick={() => setMenu(0)}>
                        <li className='pb-2'><a href='#about'>About</a></li>
                        <li className='pb-2'><a href='#rooms'>Rooms</a></li>
                        <li className='pb-2'><a href='#photos'>Gallery</a></li>
                        <li><a href='#services'>Services</a></li>
                    </ul>
                </div>
            </div>
        </div>

        

    </main>
  )
}

export default Hotel