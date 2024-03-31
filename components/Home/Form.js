"use client";
import React, { useContext, useEffect, useState } from "react";
import InputItem from "./Input";
import { PickupContext } from "../../context/PickupContext";
import { DestinationContext } from "../../context/DestinationContext";
import Rides from "./Rides";
import "./Form.css";

function Form() {
  const { Pickup, setPickup } = useContext(PickupContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  console.log(distance);
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
      <div className=" left-4 z-1 absolute top-[15%] w-[30%] p-6 md:pd-6 rounded-3xl border-[0.5px] shadow-lg bg-inherit backdrop-blur-lg form">
        <InputItem type="Pickup" />
        <InputItem type="destination" />

        <button
          className="p-3 bg-green-800 w-full text-white text-xl font-bold mt-5 rounded-lg"
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
