"use client";
import React, { useContext, useEffect, useState } from "react";
import { PickupContext } from "../../context/PickupContext";
import { DestinationContext } from "../../context/DestinationContext";

import Input from "./Input";
import Rides from "../../components/Home/Rides";

export default function Form() {
  // const [distance, setDistance] = useState();
  console.log("yeh hai ---->" + DestinationContext);
  const [showRides, setShowRides] = useState(false);
  const { Pickup, setPickup } = useContext(PickupContext);
  const { Destination, setDestination } = useContext(DestinationContext);

  // const calDist = () => {
  //   const dist = google.maps.geometry.spherical.computeDistanceBetween(
  //     { lat: Pickup.lat, lng: Pickup.lng },
  //     { lat: destination.lat, lng: destination.lng }
  //   );
  // console.log(dist);
  // setDestination(dist)

  useEffect(() => {
    if (Pickup) {
      console.log(Pickup);
    }
    if (Destination) {
      console.log(Destination);
    }
  }, [Pickup, Destination]);
  const handleSearch = () => {
    setShowRides(true);
  };
  return (
    <div>
      <div className="p-6 md:pd-6 rounded-lg bg-green-100 border-orange-900 border-[0.5px]">
        <p className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-green-800 mb-5">
          Share a Ride
        </p>
        <Input type="Pickup" />
        <Input type="Destination" />
        <button
          className="p-3 bg-green-800 w-full text-white text-xl font-bold mt-5 rounded-lg"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      {showRides && <Rides />}
    </div>
  );
}
