"use client";
import React, { useState } from "react";
import Form from "../../../components/Home/Form";
import Map from "../../../components/Home/Map";
import { DestinationContext } from "../../../context/DestinationContext";
import { PickupContext } from "../../../context/PickupContext";
import { LoadScript } from "@react-google-maps/api";

// Define the libraries array outside the component
const libraries = ["places"];

const Home = () => {
  const [Pickup, setPickup] = useState([]);
  const [Destination, setDestination] = useState([]);
  return (
    <PickupContext.Provider value={{ Pickup, setPickup }}>
      <DestinationContext.Provider value={{ Destination, setDestination }}>
        <LoadScript
          libraries={libraries}
          googleMapsApiKey={"AIzaSyAQl4SuaTbYMFFOzi98VsYO45K-3qlYjJw"}
        >
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
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
