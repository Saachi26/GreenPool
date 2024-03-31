"use client";
import React, { useState } from "react";
import Form from "../../../components/Home/Form";
import Map from "../../../components/Home/Map";
import { DestinationContext } from "../../../context/DestinationContext";
import { PickupContext } from "../../../context/PickupContext";
import { LoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const Home = () => {
  const [Pickup, setPickup] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <PickupContext.Provider value={{ Pickup, setPickup }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <LoadScript
          libraries={libraries}
          googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        >
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 mt-36">
            <div>
              <Form />
            </div>
            <div className="col-span-2">
              <Map />
            </div>
          </div>
        </LoadScript>
      </DestinationContext.Provider>
    </PickupContext.Provider>
  );
};

export default Home;
