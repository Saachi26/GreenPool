"use client";
import { DestinationContext } from "../../context/DestinationContext";
import { PickupContext } from "../../context/PickupContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function Input({ type }) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const [Pickup, setPickup] = useContext(PickupContext);
  const [Destination, setDestination] = useContext(DestinationContext);

  useEffect(() => {
    type == "Pickup"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("Dropoff Location");
  }, []);

  const getLatandLang = (place, type) => {
    if (!place || !place.value || !place.value.place_id) {
      throw new Error("Place object is null or undefined");
    }
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(
      document.createElement
    );
    service.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place.geometry && place.geometry.location) {
        console.log(place.geometry.location.lat());
      }
    });
  };

  if (type == "Pickup") {
    setPickup({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      name: place.formatted_address,
      label: place.name,
    });
  } else {
    setDestination({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      name: place.formatted_address,
      label: place.name,
    });
  }
  return (
    <div className="bg-white p-3 rounded-lg mt-3 flex items-center gap-4 border-orange-900 border-[0.5px]">
      <Image
        src={type == "Pickup" ? "/search.png" : "/destination.png"}
        width={15}
        height={15}
        alt="Icon"
        style={{ width: "15px", height: "auto" }}
      />
      <GooglePlacesAutocomplete
        apiKey="AIzaSyDUcFwjX1Xi9yhZx_Zb7Cq6-rgKdfcxA_I"
        selectProps={{
          value,
          onChange: (place) => {
            getLatandLang(place, type);
            setValue(place);
          },
          placeholder: "Pickup Location",
          isClearable: true,
          className: "w-full",
          components: {
            DropdownIndicator: false,
          },
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              border: "none",
            }),
          },
        }}
      />
    </div>
  );
}

export default Input;
