"use client";
import React, { useContext, useEffect, useState } from "react";
import InputItem from "./Input";
import { PickupContext } from "../../context/PickupContext";
import { DestinationContext } from "../../context/DestinationContext";
import Rides from "./Rides";
function Form() {
  const { Pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  const calculateDistance = () => {
    console.log();
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: parseFloat(Pickup.lat), lng: parseFloat(Pickup.lng) },
      { lat: parseFloat(destination.lat), lng: parseFloat(destination.lng) }
    );

    // console.log(dist * 0.000621374);
    setDistance(dist * 0.000621374);
  };
  return (
    <div>
      <div
        className="p-2 md:p-6 
    border-[2px] rounded-xl"
      >
        <p className="text-[20px] font-bold">Get a ride</p>
        <InputItem type="Pickup" />
        <InputItem type="destination" />

        <button
          className=" p-4 bg-black w-full mt-5 
        text-white rounded-lg"
          onClick={() => calculateDistance()}
        >
          Search
        </button>
      </div>
      {distance ? <Rides distance={distance} /> : null}
    </div>
  );
}

export default Form;
