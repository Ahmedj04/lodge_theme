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

function Hotel() {

  const [allHotelDetails, setHotelDetails] = useState([]);
  const [rooms, setRooms] = useState([]);

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
      />

      <Home
        allHotelDetails={allHotelDetails}
      />

      <About
        allHotelDetails={allHotelDetails}
      />

      <Photos
        allHotelDetails={allHotelDetails}
      />

<Services
        allHotelDetails={allHotelDetails}
      />
      
      <Rooms
        rooms={rooms}
      />

     

      <Review
        data={allHotelDetails?.Reviews}
      />

      <Footer
        allHotelDetails={allHotelDetails}
      />


    </main>
  )
}

export default Hotel