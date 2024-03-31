"use client";
import React, { useState } from "react";
import Form from "../../../components/Home/Form";
import Map from "../../../components/Home/Map";
import { DestinationContext } from "../../../context/DestinationContext";
import { PickupContext } from "../../../context/PickupContext";
import { LoadScript } from "@react-google-maps/api";
import "./style.css";

const libraries = ["places"];

const Home = () => {
  const [Pickup, setPickup] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <div className="flex flex-col Rectangle">
      <div className="e1"></div>
      <div className="e2"></div>
      <div className="e3"></div>
      <div className="e4"></div>
      <div className="e5"></div>
      <div className="e6"></div>
      <PickupContext.Provider value={{ Pickup, setPickup }}>
        <DestinationContext.Provider value={{ destination, setDestination }}>
          <LoadScript
            libraries={libraries}
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          >
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-28">
              <div className="absolute w-[100%] h-[100%]">
                <Map />
              </div>
              <div>
                <Form />
              </div>
            </div>
          </LoadScript>
        </DestinationContext.Provider>
      </PickupContext.Provider>
    </div>
  );
};

export default Home;
